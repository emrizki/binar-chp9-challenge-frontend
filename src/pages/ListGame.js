import React,{Fragment} from 'react'
import Pic1 from '../images/RockPaperScissor.jpg'
import Pic2 from '../images/Coolsoccer.jpg'
import Pic3 from '../images/Spaceinvaders.jpg'
import Pic4 from '../images/Streetfighter.jpeg'
import '../pages/ListGame.css'
import NavigationBar from '../components/Navbar'

function ListGame() {
    return (
        <Fragment>
            <NavigationBar />
        <div className='cards-element mt-5'>
        <div className='card-container'>
            <div className='image-container'><img src={Pic1} alt='' /></div>
            <div className='card-content'>
                <div className='card-title'>Rock Paper Scissors</div>
                <div className='card-body'>Rock Paper Scissors is a game played to settle disputes between two people. 
                It's easy and exciting to play so let's go and try!</div>
                <div className='btn'><button><a href='/rps'>Play Game</a></button></div>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'><img src={Pic2} alt='' /></div>
            <div className='card-content'>
                <div className='card-title'>Cool Soccer</div>
                <div className='card-body'>Can you become a soccer legend and score goals like Messi and Ronaldo?
                Take your chance with our best free online soccer game now!</div>
                <div className='btn'><button><a>Play Game</a></button></div>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'><img src={Pic3} alt='' /></div>
            <div className='card-content'>
                <div className='card-title'>Space Invaders</div>
                <div className='card-body'>Experience the king of shooting games which is Space Invader. 
                What are you waiting for? Shoot down all the aliens now! Unexpected prizes are waiting! </div>
                <div className='btn'><button><a>Play Game</a></button></div>
            </div>
        </div>
        <div className='card-container'>
            <div className='image-container'><img src={Pic4} alt='' /></div>
            <div className='card-content'>
                <div className='card-title'>Street Fighter</div>
                <div className='card-body'>Meet the legendary fighting games, Street Fighter. 
                You can experience a head-to-head battles with your friends. Exciting isn't it?</div>
                <div className='btn'><button><a>Play Game</a></button></div>
            </div>
        </div>
        </div>
        </Fragment>
    )
}

export default ListGame
