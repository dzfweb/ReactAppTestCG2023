import React from 'react';
import fetch from 'node-fetch';

const workoutServices = () => {
  const url = 'http://localhost:3001/workouts';

  const GetWorkouts = async () => {
    let data = [];
    const res = await fetch(url);
    data = await res.json();
    return data;
  };

  const GetWorkoutById = async id => {
    let data = await GetWorkouts();
    return data.find(el => el.id === id);
  };

  return {
    GetWorkouts,
    GetWorkoutById,
  };
};

export default workoutServices;
