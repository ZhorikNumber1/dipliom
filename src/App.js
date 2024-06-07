import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import TopicsList from './Components/Theory/TopicsList';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theory" element={<TopicsList />} />
          <Route path="/practice" element={<div>Практика</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
