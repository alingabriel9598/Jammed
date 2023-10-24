import React from 'react';
import styles from './Home.module.css'

function Home(){
    return (
        <div className={styles.div}>
            <h1>Welcome to SpotifyAPI</h1>
            <h2>Here is what you can do on this website:</h2>
            <ul>
                <li>Search for Songs on Spotify</li>
                <li>See your playlists</li>
                <li>Create a new playlist</li>
                <li>See your favorite/saved songs</li>
                <li>More are coming in the following updates</li>
            </ul>
        </div>
    )
}

export default Home;