import React, { useState } from 'react';
import Moviesdata from "./Moviesdata";
import './style.css';
const Movie = () => {

    const [items, setItems] = useState(Moviesdata);

    const filterItem = (catItem) => {
        const updateItem = Moviesdata.filter((curElem) => {
            return curElem.category === catItem;
        });

        setItems(updateItem);

    }






    return (
        <>
             <div className="header">
            <h3><i>Movies</i></h3>
            </div>
            <br /><br />
            <button

                onClick={() => {
                    filterItem("2021")
                }}
                className="btn btn-secondary"

            >2021</button>
            <button

                onClick={() => {
                    filterItem("2020")
                }}
                className="btn btn-secondary"

            >2020</button>
            <button

                onClick={() => {
                    filterItem("2019")
                }}
                className="btn btn-secondary"

            >2019</button>
            <button
                onClick={() => {
                    filterItem("old")
                }}
                className="btn btn-secondary"

            >old</button>
            <button

                onClick={() => {
                    setItems(Moviesdata);
                }}
                className="btn btn-secondary"

            >All</button>


            {

                items.map((elem) => {

                    const { imgsrc, cardtitle, category, btntext} = elem;

                    return (
                        <div className="row">
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">{category}</p>
                         <a href="#" className="btn btn-primary">{btntext}</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">{category}</p>
                         <a href="#" className="btn btn-primary">{btntext}</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">{category}</p>
                         <a href="#" className="btn btn-primary">{btntext}</a>
                    </div>
                        </div>
                        </div>
                        </div>

                    )

                })


            }



        </>
    );
};

export default Movie;