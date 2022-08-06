import './Header.css';
import AlgoOption from './AlgoOption';
import Button from './Button';
import { useState } from 'react';
import RandomGrid from '../Grid/RandomGrid';

const Header=()=>{
    const [selectedAlgo,setSelectedAlgo]=useState("none");

    const AlgorithmHander=(algorithm)=>{
        setSelectedAlgo(algorithm);
    }

    return(
        <div class="header">
            <div class="heading">Visualizer</div>
            <div>
                <AlgoOption algo={selectedAlgo} algoHandler={AlgorithmHander}></AlgoOption>
                <Button selectedAlgo={selectedAlgo}></Button>
                <RandomGrid></RandomGrid>
            </div>
        </div>
    );
}

export default Header;