import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { detailsUrl } from '../constants/api';
import axios from 'axios';
import Spinner from '../components/ui/Spinner.component';
import CoinDetailsComponent from '../components/coins/CoinDetails.component';
const CoinPage = () => {
    const paramObject = useParams();
    const url = "https://api.coingecko.com/api/v3/coins/bitcoin";
   // const url = detailsUrl(paramObject.id);


    const [coin, setcoin] = useState({});
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");
    useEffect(() => {
        setloading(true);
        axios(url)
            .then(response => {
                setloading(false);
                // console.log(response.data);
                setcoin(response.data);
            })
            .catch(error => {
                seterror("An error occured!");
            })
    }, []

    );
    console.log(url);


    return (
        <div className='container'>
            {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinDetailsComponent  coin = {coin}/>}


        </div>
    );
};

export default CoinPage;