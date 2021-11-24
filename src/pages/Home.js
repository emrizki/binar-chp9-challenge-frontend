import React,{Fragment} from 'react'
import '../pages/Home.css'
import NavigationBar from '../components/Navbar'

function Home() {
    return (
        <Fragment>
            <NavigationBar />
        <div>
            <div className='content'>
                <div className='intro'>
                    <h1>Hello, Nama</h1>
                    <p>Lorem ipsum dolor sit amte, consectetur adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amte, consectetur adipiscing elit.</p>
                    <a href='/listgames' className='btn-play-game'>Play Game</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home
