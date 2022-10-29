import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <h3>Поле для звязку</h3>
      <h4>
        Підпишіться на розсилку та будьте в курсі новин та акцій, що з’являються
        в нашому магазині!
      </h4>
      <form>
        <input type="text" />
        <input type="submit" value=">" />
        <label>
          
          <p>
          <input type="checkbox" name="" id="" />
            Я погоджуюся отримувати в електронному вигляді на надану мною адресу
            електронної пошти інформацію про послуги, у розумінні Закону про
            надання електронних послуг
          </p>
        </label>
      </form>
      <div className="sales">
        <h4>Відділ продажів: </h4>
        <p>Тел: +380-000-000-00-00</p>
        <p>Тел: +380-000-000-00-00</p>
        <p>Тел: +380-000-000-00-00</p>
        <p>E-mail: email@email.com</p>
      </div>
    </div>
  );
}
