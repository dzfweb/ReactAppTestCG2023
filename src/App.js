import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './app.css';

//App Components
import LayoutComponent from './Components/LayoutComponent/LayoutComponent';
import WorkoutBoxComponent from './Components/WorkoutBoxComponent/WorkoutBoxComponent';
import WorkoutDetailBoxComponent from './Components/WorkoutDetailBoxComponent/WorkoutDetailBoxComponent';

//Workout API Service
import workoutServices from './Services/WorkoutServices';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const { GetWorkouts, GetWorkoutById } = workoutServices();

  useEffect(() => {
    async function load() {
      setWorkouts(await GetWorkouts());
    }
    load();
  }, []);

  return (
    <LayoutComponent>
      <BrowserRouter>
        <Routes>
          <Route
            element={<WorkoutBoxComponent workouts={workouts} />}
            path="/"
          />
          <Route element={<WorkoutDetailBoxComponent />} path="/detail/:id" />/
        </Routes>
      </BrowserRouter>
    </LayoutComponent>
  );
}

export default App;
