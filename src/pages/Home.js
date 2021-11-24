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
                    <h1>Hello, {localStorage.getItem('username')}</h1>
                    <p>Selamat datang di Binar Games.</p>
                    <p>Pilih game sekarang untuk menikmati pengalaman yang tak terlupakan.</p>
                    <a href='/listgames' className='btn-play-game'>Play Game</a>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home
