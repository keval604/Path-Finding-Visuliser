import './Header.css';
import '../../bootstrap5/css/bootstrap.min.css';
import AlgoOption from './AlgoOption';
import Button from './Button';
import { useState } from 'react';
import RandomGrid from '../Grid/RandomGrid';
import ClearGrid from '../Grid/ClearGrid';
import SpeedController from './SpeedController';

const Header=()=>{
    const [selectedAlgo,setSelectedAlgo]=useState("none");
    const [selectedSpeed,setSelectedSpeed]=useState(100);

    const AlgorithmHander=(algorithm)=>{
        setSelectedAlgo(algorithm);
    }
    const SpeedHander=(speed)=>{
        setSelectedSpeed(speed);
    }

    return(
        // <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <div class="nav-brand text-white"><h1> Visualizer </h1></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><div class="nav-link"><AlgoOption algo={selectedAlgo} algoHandler={AlgorithmHander}></AlgoOption></div></li>
                    <li class="nav-item"><div class="nav-link"><SpeedController speed={selectedSpeed} speedHandler={SpeedHander}></SpeedController></div></li>
                    <li class="nav-item"><div class="nav-link"><Button selectedAlgo={selectedAlgo} speed={501+(-1)*selectedSpeed}></Button></div></li>
                    <li class="nav-item"><div class="nav-link"><RandomGrid></RandomGrid></div></li>
                    <li class="nav-item"><div class="nav-link"><ClearGrid></ClearGrid></div></li>
                </ul>
                </div>
            </div>
            </nav>

        // </div>
        /* <div class="heading">Visualizer</div> */

        /* <div class="links">
            <div class="link"></div>
            <div class="link"></div>
            <div class="link"></div>
            <div class="link"><RandomGrid></RandomGrid></div>
            <div class="link"><ClearGrid></ClearGrid></div>
        </div> */
    );
}

export default Header;