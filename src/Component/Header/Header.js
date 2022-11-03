import './Header.css';
import AlgoOption from './AlgoOption';
import { useState } from 'react';
import RandomGrid from '../Grid/RandomGrid';
import ClearGrid from '../Grid/ClearGrid';
import SpeedController from './SpeedController';
import GridButton from '../Grid/GridButton';
import MapButton from '../Map/MapButton';

const Header=(props)=>{
    const [selectedAlgo,setSelectedAlgo]=useState("none");
    // const [selectedSpeed,setSelectedSpeed]=useState(500);
    
 
    const optionHandler=(option)=>{
        props.handler(option);
    }
    // const SpeedHandler=(speed)=>{
    //     setSelectedSpeed(speed);
    // }

    const AlgorithmHandler=(algorithm)=>{
        setSelectedAlgo(algorithm);
    }

    return(
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <div class="nav-brand text-white"><h1> Visualizer </h1></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li><div class="nav-link"><AlgoOption selection={props.type} handler={props.typeHandler} optionType="container"></AlgoOption></div></li>
                    <li><div class="nav-link"><AlgoOption selection={selectedAlgo} handler={AlgorithmHandler} optionType="algorithm"></AlgoOption></div></li>
                            <h3>{ props.speed}</h3>
                    {props.type=="grid" &&
                        <>
                            <li><div class="nav-link"><GridButton selectedAlgo={selectedAlgo}  ></GridButton></div></li>
                            {/* <li><div class="nav-link"><SpeedController speed={selectedSpeed} speedHandler={SpeedHandler}></SpeedController></div></li> */}
                            <li><div class="nav-link"><SpeedController  ></SpeedController></div></li>
                            <li><div class="nav-link"><RandomGrid></RandomGrid></div></li>
                            <li><div class="nav-link"><ClearGrid></ClearGrid></div></li>
                        </>
                    }
                    {
                        props.type=="map" &&
                        <li><div class="nav-link"><MapButton selectedAlgo={selectedAlgo}  ></MapButton></div></li>
                    }
                </ul>
                </div>
            </div>
            </nav>
        </div>
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