import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./Challenges/1/challenge1";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizzas />
    </main>
  );
}

function Pizzas() {
  return pizzaData.length > 0 ? (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </ul>
  ) : (
    <p>We're still working on our menu. Please come back later!😉</p>
  );
}

function Pizza({ soldOut, photoName, name, ingredients, price }) {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (!isOpen)
  // return (
  //    <Order closeHour={closeHour} />;
  // );

  // return (
  //   <footer className="footer">
  //     <div className="order">
  //       <p>We're open until {closeHour}:00. Come visit us or order online.</p>
  //       <button className="btn">Order</button>
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're currently closed. Please visit between {openHour}:00 -{" "}
          {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

// React@18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
