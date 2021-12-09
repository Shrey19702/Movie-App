import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/mail' element={<div>hello there</div>} />
      </Routes>
    </Router>
  );
}

export default App;
