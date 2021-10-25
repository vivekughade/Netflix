import React,{useState} from 'react';

const Admin = () => {
    const[data,setData]= useState({
        imgsrc:"",
        cardtitle:"",
        category:"",

    })
    const set = (e)=>{
        const i=e.target.value;
        const title=e.target.value;
        const year=e.target.value;
        setData(i,title,year)

    }
    const fun = ()=>{
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
                  <input type="file" onChange={set} placeholder="upload image"/><br />
                  <input type="text" onChange={set} placeholder="Movie/Game Name"/><br/>
                  <input type="text" onChange={set} placeholder="category(year)"/>
                  <button className="btn btn-success" onClick={fun}>Add</button>

              </form>

              </div>

          </div> 
          </div>
        </>
    );
};

export default Admin;