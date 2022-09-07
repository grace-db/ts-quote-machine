import { useState, useEffect } from "react";


function App() {
  const [lyric, setLyric] = useState('');
  const [artist, setArtist] = useState('');
  useEffect(() => {
    getLyrics();
  }, []);

const getLyrics = () => {
  fetch("https://gist.githubusercontent.com/grace-mccarty/c77da583eb442ed35c890332f9efdfe8/raw/137243dddaced1faef88100b906a698c0779b228/tswift-lyrics.json")
    .then((res) => res.json())
    .then((song) => {
      let songLy = song.lyrics;
      let randNum = Math.floor(Math.random() * songLy.length);
      let randLy = songLy[randNum];
      setLyric(randLy.lyric);
      setArtist(randLy.artist);
    });
};

const nextLyric = () => {
  getLyrics();
}

  return (
    <main id="container">
      <div id="quote-box">
        <p id="text">{lyric}</p>
        <div id="btm-row">
          <p id="author">- {artist}</p>
          <button id="new-quote" onClick={nextLyric}>swiftify~</button>
          <a className="twitter-share-button" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <p id="final-p">All lyrics belong to Taylor Swift</p>
      </div>
    </main>
  );
}

export default App;
