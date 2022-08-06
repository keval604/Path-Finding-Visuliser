import './Header.css';
// import '../../bootstrap5/css/bootstrap.min.css';
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
        <div class="header">
            <div class="heading">Visualizer</div>

            <div class="links">
                <AlgoOption algo={selectedAlgo} algoHandler={AlgorithmHander}></AlgoOption>
                <SpeedController speed={selectedSpeed} speedHandler={SpeedHander}></SpeedController>
                <Button selectedAlgo={selectedAlgo} speed={selectedSpeed}></Button>
                <RandomGrid></RandomGrid>
                <ClearGrid></ClearGrid>
            </div>
            </div>
    );
}

export default Header;