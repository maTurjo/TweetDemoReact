import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import { TweetBox } from './components/TweetBox';
import { TweetFeed } from './components/TweetFeed';
import { BrowserRouter } from "react-router-dom";
import { useState,useEffect } from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <header className="App-header">
          <h1>Hello Twotter</h1>
          
            <TweetBox></TweetBox>
            <TweetFeed></TweetFeed>
         
        </header>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
