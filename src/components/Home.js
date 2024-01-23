import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import close from '../assets/close.svg';

const Home = ({ home, provider, escrow, toggleProp }) => {

    return (
        <div className="home">
            <div className='home__details'>
                <div className = "home__image">
                    <img src ={home.image} alt = "Home"/>
                </div>
                <div className='home__overview'>
                    <h1>{home.name}</h1>
                </div>

                <button onClick={toggleProp} className="home__close">
                    <img src={close} alt="Close" />
                </button>

            </div>

        </div>
    );
}

export default Home;
