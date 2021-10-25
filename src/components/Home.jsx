import React from 'react';
import { useHistory } from 'react-router';
import About from './About';
import Games from './Games';
import Movie from './Movie';
import Pricing from './Pricing';
import Downloads from './Downloads';

const Home = () => {
   
    const history=useHistory()



    
    return (
        <>
     
        <div className="row">
        <div className="container-fluid">
        <img src="/images/banner1.jpg" alt="movies"/>
        </div>
        
       <div className="box">
       <p>Since Sony Pictures' contract to co-produce the James Bond series with MGM and Eon Productions expired with the release of Spectre, Annapurna, along with five major studios – Warner Bros., Universal Pictures, 20th Century Fox, Paramount Pictures and Sony itself – vied to win the rights to the next film as of April 2017. It was then announced that MGM had secured the domestic, digital and worldwide television rights to the film. Universal was announced as the international distributor of the film and holder of the rights for physical home entertainment distribution.[22]</p>
       </div>
       </div>
       <div className="row">
            <About/>
       </div>
       <div className="row">
           <Games/>
       </div>
       <div className="row">
           <Movie/>
       </div>
       <div className="row">
           <Pricing/>
       </div>
       <div className="row">
           <Downloads/>
       </div>

            
        </>
    )
}

export default Home;