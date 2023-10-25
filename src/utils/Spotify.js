const clientId = '4095a0abfe9f4bbdb7937798694c0d75'; // Replace with your Spotify API client ID
const redirectUri = 'http://localhost:3000/'; // Your specified redirect URI
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for an existing access token in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Clear the access token from the URL
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      // Redirect the user to Spotify for authentication
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public user-library-read &redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.tracks) {
          return [];
        }

        return data.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  savePlaylist(name, trackUris) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    return fetch('https://api.spotify.com/v1/me', {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        const userId = data.id;

        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((data) => {
            const playlistId = data.id;

            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },

  getPlaylists() {
    const accessToken = this.getAccessToken();
    return fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.items) {
          return [];
        }
        const playlists = jsonResponse.items.map(playlist => ({
          id: playlist.id,
          name: playlist.name,
          description: playlist.description,
          tracks: playlist.tracks.total,
        }));
  
        // Fetch song details for each playlist
        const playlistPromises = playlists.map(playlist => {
          return this.getPlaylistTracks(playlist.id, accessToken).then(tracks => {
            playlist.tracksData = tracks;
            return playlist;
          });
        });
  
        return Promise.all(playlistPromises);
      });
  },
  
  getPlaylistTracks(playlistId, accessToken) {
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.items) {
          return [];
        }
        return jsonResponse.items.map(track => ({
          id: track.track.id,
          name: track.track.name,
          artist: track.track.artists[0].name,
          album: track.track.album.name,
          uri: track.track.uri
        }));
      });
  },

  getFavoriteSongs() {
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/me/tracks', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (!jsonResponse.items) {
          return [];
        }
        return jsonResponse.items.map(item => ({
          id: item.track.id,
          name: item.track.name,
          artist: item.track.artists[0].name,
          album: item.track.album.name,
          uri: item.track.uri,
        }));
      });
  },
};

export default Spotify;