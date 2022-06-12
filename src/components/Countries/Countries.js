import React, { useEffect, useState } from "react"
import Country from "../country/Country"
import "./countries.css"

export default function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(function () {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Rest Countries</h1>
      <p>By : Muhammad Siam</p>
      <h2>Total Coutries : {countries.length} </h2>
      <hr />
      <div className="countries">
        {countries.map((country) => (
          <Country country={country} key={country.area}></Country>
        ))}
      </div>
    </div>
  )
}
