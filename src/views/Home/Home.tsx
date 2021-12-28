import React,{Component} from "react";

//component
import {Header} from '../../components/Header/Header'

//images
import Food from '../../assets/images/cupcakes-g6750923d4_1920.jpg'

const Home : React.FC = (): JSX.Element =>{ 
        return(
            <>
            <Header title="Home"/>
               <div className="main-content">
                   <div className="left">
                       <div className="container">
                            <h1>Quick Recipes & long-lasting tastes</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officiis maxime, amet ea numquam cumque architecto doloremque</p>
                            <button>Get Started</button>
                       </div>
                   </div>
                   <div className="right">
                       <img src={Food} alt="food-image" className="img-fluid" />
                   </div>
               </div>
            </>
        )
}

export default Home