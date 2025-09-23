import React, { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner.component";
import axios from "axios";
import { baseUrl } from "../constants/api";
import CoinsComponent from "../components/coins/Coins.component";

const HomePage = () => {

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  useEffect(() => {
    setloading(true);
    axios(baseUrl)
      .then(response => {
        setloading(false);
       // console.log(response.data);
       setdata(response.data);
      })
      .catch(error => {
        seterror("An error occured!");
      })
  }, []

  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Crypto Tracking</h1>
          <h4>Quia dolores animi, aliquam praesentium harum ducimus deleniti aspernatur reiciendis</h4>
          <h4>Nom quod consequatur repellendus saepe voluptate aperiam architecto!</h4>

        </div>

      </div>
      <div className="orw">
 <div className="col-12">
  {loading?  <Spinner/> : error != "" ? <h1>{error}</h1> : <CoinsComponent data={data}/>  }
</div>  

      </div>

      {/* <Spinner/> */}

    </div>
  );
};
export default HomePage;
