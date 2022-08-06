import './Header.css';
// import '../../bootstrap5/css/bootstrap.min.css';
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
            <div class = "links">
                <div class = "link"><AlgoOption algo={selectedAlgo} algoHandler={AlgorithmHander}></AlgoOption></div>
                <div class = "link"><Button selectedAlgo={selectedAlgo}></Button></div>
                <div class = "link"><RandomGrid></RandomGrid></div>
            </div>
        </div>
    );
}

export default Header;