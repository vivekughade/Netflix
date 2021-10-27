import Gamesdata from "./Gamesdata";
import './style.css';
const Games = () => {

 

    return (
        <>  <div className="header">
            <h3><i>Games</i></h3>
            </div>

            {

                Gamesdata.map((elem) => {

                    const { imgsrc, cardtitle} = elem;

                    return (<div className="row">
                    <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                        </div>
                        </div>
                        <div className="col-lg-4" style={{marginBottom:'5px'}}>
                        <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={imgsrc} alt="Card  cap"/>
                        <div className="card-body">
                        <h5 className="card-title">{cardtitle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <a href="#" className="btn btn-primary">Go somewhere</a>
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