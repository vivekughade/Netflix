import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import "./style.css"
const Pricing = () => {
    return (
        <><div className="container-fluid">
            <h1>Plans and Pricing</h1>
            <div className="box">
            <p>Netflix offers a variety of plans to meet your needs.
             The plan you choose will determine the video quality and 
            the number of screens you can watch Netflix on at the same time.
            With all of our plans, you can watch unlimited movies and TV shows.</p>
            </div>
            
            <div className="row">    
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Mobile</th>
      <th scope="col">Basic</th>
      <th scope="col">Standard</th>
      <th scope="col">Premium</th>
    </tr>
  </thead>
                
                    <tr>
                        <td>Monthly cost * (Indian Rupee)</td>
                        <td>₹199 INR</td>
                        <td>₹499 INR</td>
                        <td>₹649 INR</td>
                        <td>₹799 INR</td>
                    </tr>
                    <tr>
                        <td>Number of screens you can watch on at the same time</td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>Number of phones or tablets you can have downloads on</td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>Unlimited movies and TV shows</td>
                        <td></td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>Watch on your mobile phone and tablet</td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>Watch on your laptop and TV</td>
                        <td></td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>HD available</td>
                        <td></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                    <tr>
                        <td>Ultra HD available</td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                        <td><DoneIcon/></td>
                    </tr>
                </table>
            </div>
            </div>
        </>
    );
};

export default Pricing;