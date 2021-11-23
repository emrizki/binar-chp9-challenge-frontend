import React from 'react'

const Game = () => {
    return (
            <div>
                <div class="container-fluid mt-3">
                    <div class="row align-items-center">
                    <div class="col-1 fs-1 fw-bolder text-end custom-back-button">
                        &lt;
                    </div>
                    <div class="col-1 text-center">
                        <img src="./assets/img/logo.png" class="custom-logo" />
                    </div>

                    <div class="col fs-2 fw-bold custom-game-title">
                        ROCK PAPER SCISSOR
                    </div>
                    </div>
                </div>
                <div class="container text-center custom-game-section">
                    <div class="row my-3 justify-content-center align-items-center">
                    <div class="col-2 fs-4 fw-bold custom-game-player-name">
                        PLAYER1<p>Score: <span id="user-score">0</span></p>
                    </div>
                    <div class="col-2">
                    </div>
                    <div class="col-2 fs-4 fw-bold custom-game-player-name">
                        COM<p>Score: <span id="computer-score">0</span></p>
                    </div>
                    </div>
                    <div class="row my-5 justify-content-center align-items-center">
                    <div class="col-2 custom-choice-background align-items-center" id="player-rock">
                        <img class="custom-choice" src="./assets/img/batu.png" />
                    </div>
                    <div class="col-2">
                    </div>
                    <div class="col-2 custom-choice-background" id="com-rock">
                        <img class="custom-choice" src="./assets/img/batu.png" />
                    </div>
                    </div>
                    <div class="row my-5 justify-content-center align-items-center">
                    <div class="col-2 custom-choice-background" id="player-paper">
                        <img class="custom-choice" src="./assets/img/kertas.png" />
                    </div>
                    <div class="col-2 mx-2 fw-bold custom-vs-background custom-vs-text" id="vs">
                        VS
                    </div>
                    <div class="col-2 custom-choice-background" id="com-paper">
                        <img class="custom-choice" src="./assets/img/kertas.png" />
                    </div>
                    </div>
                    <div class="row my-5 justify-content-center align-items-center">
                    <div class="col-2 custom-choice-background" id="player-scissor">
                        <img class="custom-choice" src="./assets/img/gunting.png" />
                    </div>
                    <div class="col-2">
                    </div>
                    <div class="col-2 custom-choice-background" id="com-scissor">
                        <img class="custom-choice" src="./assets/img/gunting.png" />
                    </div>
                    </div>
                    <div class="row my-5 justify-content-center align-items-center">
                    <div class="col-2">
                    </div>
                    <div class="col-2" id="reset">
                        <img class="custom-choice" src="./assets/img/refresh.png" />
                    </div>
                    <div class="col-2">
                    </div>
                    </div>
                </div>
            </div>
        )
}

export default Game

