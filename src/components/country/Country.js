import React from "react"
import "./country.css"

export default function Country(props) {
  const {
    name,
    region,
    capital,
    flags,
    population,
    timezones,
    continents,
    subregion
  } = props.country
  console.log(props.country)
  return (
    <div className="country">
      <h2>Name : {name.official}</h2>
      <img src={flags.png} alt="" />
      <h3>Region : {region}</h3>
      <h3>Subregion : {subregion}</h3>
      <h3>Continents : {continents}</h3>
      <h4>TimeZone : {timezones}</h4>
      <h4>Capital : {capital}</h4>
      <p>Population : {population}</p>
    </div>
  )
}
