import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Teary from "../../Img/Teory3.png"
import Labs from "../../Img/Labs4.png"
import page1 from "../../Img/Group 7.png"
import page2 from "../../Img/Group 9.png"

const MainPage = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Учебное пособие для визуализации работы процессора и оперативной памяти</h1>
      </header>
      <div className='home-content'>
        <div>
        <img src={page2} />
        <img src={page1} className="img_page1"/>
        </div>
      </div>
      <section className="home-content">
      <Link to="/theory" className="card">
          <img src={Teary} alt="Теория" />
          <h2>Теория</h2>
        </Link>
        <Link to="/practice" className="card">
          <img src={Labs} alt="Лабораторные работы" />
          <h2>Лабораторные работы</h2>
        </Link>
      </section>
    </div>
  );
};

export default MainPage;