import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";

import './app.css';

//App Components
import LayoutComponent from './Components/LayoutComponent/LayoutComponent';
import WorkoutBoxComponent from './Components/WorkoutBoxComponent/WorkoutBoxComponent';
import WorkoutDetailBoxComponent from './Components/WorkoutDetailBoxComponent/WorkoutDetailBoxComponent';


function App() {
  return (
    <LayoutComponent>
      <BrowserRouter>
          <Routes>
              <Route element= { <WorkoutBoxComponent/> }  path="/"  />
              <Route element= { <WorkoutDetailBoxComponent/> }  path="/detail/:id" />/
          </Routes>
      </BrowserRouter>
    </LayoutComponent>
  );
}

export default App;
