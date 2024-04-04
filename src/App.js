import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<News  key = "General" pageSize={9} country="in" category="General" />} />
            <Route path="/Business" element={<News key = "Business" pageSize={9} country="in" category="Business" />} />
            <Route path="/Entertainment" element={<News  key = "Entertainment"pageSize={9} country="in" category="Entertainment" />} />
            <Route path="/Sports" element={<News key = "Sports" pageSize={9} country="in" category="Sports" />} />
            <Route path="/Health" element={<News  key = "Health" pageSize={9} country="in" category="Health" />} />
            <Route path="/Science" element={<News  key = "Science" pageSize={9} country="in" category="Science" />} />
            <Route path="/Technology" element={<News key = "Technology" pageSize={9} country="in" category="Technology" />} />
            <Route path="/General" element={<News key = "General" pageSize={9} country="in" category="General" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
