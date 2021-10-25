import Gamesdata from "./Gamesdata";
import './style.css';
const Games = () => {

 

    return (
        <>
            

            {

                Gamesdata.map((elem) => {

                    const { imgsrc, cardtitle} = elem;

                    return (<div className="row">
                    <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={imgsrc} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">{cardtitle}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={imgsrc} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">{cardtitle}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src={imgsrc} alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">{cardtitle}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" class="btn btn-primary">Go somewhere</a>
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

export default Games;