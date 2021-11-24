import axios from 'axios';
import React from 'react';
import NavigationBar from '../components/Navbar';

const Game = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid mt-3">
        <div className="row align-items-center">
          <div className="col-1 fs-1 fw-bolder text-end custom-back-button">
            &lt;
          </div>
          <div className="col-1 text-center">
            <img src="./assets/img/logo.png" className="custom-logo" />
          </div>

          <div className="col fs-2 fw-bold custom-game-title">
            ROCK PAPER SCISSOR
          </div>
        </div>
      </div>
      <div className="container text-center custom-game-section">
        <div className="row my-3 justify-content-center align-items-center">
          <div className="col-2 fs-4 fw-bold custom-game-player-name">
            PLAYER1
            <p>
              Score: <span id="user-score">0</span>
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-2 fs-4 fw-bold custom-game-player-name">
            COM
            <p>
              Score: <span id="computer-score">0</span>
            </p>
          </div>
        </div>
        <div className="row my-5 justify-content-center align-items-center">
          <div
            className="col-2 custom-choice-background align-items-center"
            id="player-rock"
          >
            <img className="custom-choice" src="./assets/img/batu.png" />
          </div>
          <div className="col-2"></div>
          <div className="col-2 custom-choice-background" id="com-rock">
            <img className="custom-choice" src="./assets/img/batu.png" />
          </div>
        </div>
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2 custom-choice-background" id="player-paper">
            <img className="custom-choice" src="./assets/img/kertas.png" />
          </div>
          <div
            className="col-2 mx-2 fw-bold custom-vs-background custom-vs-text"
            id="vs"
          >
            VS
          </div>
          <div className="col-2 custom-choice-background" id="com-paper">
            <img className="custom-choice" src="./assets/img/kertas.png" />
          </div>
        </div>
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2 custom-choice-background" id="player-scissor">
            <img className="custom-choice" src="./assets/img/gunting.png" />
          </div>
          <div className="col-2"></div>
          <div className="col-2 custom-choice-background" id="com-scissor">
            <img className="custom-choice" src="./assets/img/gunting.png" />
          </div>
        </div>
        <div className="row my-5 justify-content-center align-items-center">
          <div className="col-2"></div>
          <div className="col-2" id="reset">
            <img className="custom-choice" src="./assets/img/refresh.png" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
