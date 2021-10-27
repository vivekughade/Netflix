import React,{useState} from 'react';

const Admin = () => {
    const[data,setData]= useState({
        imgsrc:"",
        cardtitle:"",
        category:"",

    })
    const set = (e)=>{
        const name=e.target.name;
        const value=e.target.file;
        const value2=e.target.value;
       
       setData((oldval) => {
            return { ...oldval, [name]: value ,[name]:value2 }
        })

    }

    const fun = ()=>{
        console.log(data[0]);
            alert("updated successfully")
    }
    return (
        <><div className="r">
          <div className="row b">
          <h3>Admin Page</h3>
              <div className="col-lg-6 a">
              <h3>Home</h3>
              <h3>Movies</h3>
              <h3>Games</h3>

              </div>
              <div className="col-lg-6 a">
              <form >
                  <input type="file" onChange={set} name="imgsrc" placeholder="upload"/><br />
                  <input type="text" onChange={set} name="cardtitle" placeholder="Movie/Game Name"/><br/>
                  <input type="text" onChange={set}  name="category" placeholder="category(year)"/>
                  <button className="btn btn-success" onClick={fun}>Add</button>

              </form>

              </div>

          </div> 
          </div>
        </>
    );
};

export default Admin;