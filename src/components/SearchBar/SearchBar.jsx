import React from "react";
import './searchbar.css'
import mainlogo from "../../images/main-logo.jpg";
import searchlogo from "../../images/icons/searchlogo.png";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <img src={mainlogo} alt="mainlogo" />
      <form className="search-form">
        <div className="searchlogo-container"><img className="searchlogo" src={searchlogo} alt="" /></div>
        <input className="search-field" type="text" placeholder="Введіть для пошуку"/>
        <input className="search-button" type="submit" value="Шукати" />
      </form>
    </div>
  );
}
