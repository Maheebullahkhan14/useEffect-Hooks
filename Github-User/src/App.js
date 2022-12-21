import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  const GetUser = async () => {
    const response = await fetch(url);
    setUsers(await response.json());
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <>
      {
        Users.map(user=>{
            return(
              <div className="Card">
        <div className="img">
          <img src={user.avatar_url}>

          </img>
        </div>

        <div className="Details">
          <h5>{user.login}</h5>
          

          <div className="allDetails">
            <div className="myspan">
              <span>id</span>
              <span>{user.id}</span>
            </div>
            <div className="myspan">
              <span>Followers</span>
              <span>25</span>
            </div>
            <div className="myspan">
              <span>starred</span>
              <span>46</span>
            </div>
          </div>
        </div>
      </div>
            )
        })
      })

      
      
      
    </>
  );
}

export default App;
