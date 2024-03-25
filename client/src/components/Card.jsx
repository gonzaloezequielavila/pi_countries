import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from 'axios';




const Card = () => {

  const {id} = useParams();
  const [countryDetail, setCountryDetail] = useState({});

  const apiEndPoint = "http://localhost:3001/countries/"

  useEffect(()=> {
    axios.get(`${apiEndPoint}${id}`)
    .then(({data})=> {
      if(data){
        setCountryDetail(data)
      } else {
        window.alert(`There's no country with that id`)
      }
    });
    return setCountryDetail({})
  }, [id])

return (
  <div>
    <h1>{countryDetail.name}</h1>
    <div>
      <img src={countryDetail.flag} alt={`${countryDetail.name}'s flag`}/>
      <h3>Continent: {countryDetail.continent}</h3>
      <h3>Capital: {countryDetail.capital}</h3>
      <h3>Subregion: {countryDetail.subregion}</h3>
      <h3>Area: {countryDetail.area} km</h3>
      <h3>Population: {countryDetail.population} </h3>
    </div>
  </div>
)
}

export default Card;