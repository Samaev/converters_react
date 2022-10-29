import React from "react";
import './converter.css'

export default function Converter({ converter }) {
  return (
    <>
      <div className="card">
        <img src={converter.url} alt="converter" />
        <strong> {converter.title}</strong>
        <button className="order-button">Замовити дзвінок</button>
        <button className="order-button">Надіслати листа поштою</button>
      </div>
    </>
  );
}
