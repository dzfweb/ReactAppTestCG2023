import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import WorkoutBoxComponent from './Components/WorkoutBoxComponent/WorkoutBoxComponent';

describe('WorkoutBoxComponent', () => {
  const workouts = [
    {
      id: 1,
      title: 'Workout 1',
      thumbnail: 'thumbnail1.jpg',
      duration: 30,
      levelTag: 'Intermediate',
      impactTag: 'Low',
      description: 'Workout 1 description',
    },
    {
      id: 2,
      title: 'Workout 2',
      thumbnail: 'thumbnail2.jpg',
      duration: 45,
      levelTag: 'Advanced',
      impactTag: 'High',
      description: 'Workout 2 description',
    },
  ];

  it('renders workout boxes with correct data', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <WorkoutBoxComponent workouts={workouts} />
      </Router>
    );

    workouts.forEach(workout => {
      const workoutTitle = getByText(workout.title);
      const workoutImage = getByAltText(workout.title);
      const durationBadge = getByText(`${workout.duration} minutes`);
      const levelAndImpactTags = getByText(
        `${workout.levelTag} level • ${workout.impactTag} impact`
      );
      const description = getByText(workout.description);

      expect(workoutTitle).toBeInTheDocument();
      expect(workoutImage).toBeInTheDocument();
      expect(durationBadge).toBeInTheDocument();
      expect(levelAndImpactTags).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });

  it('renders "Detail" button with correct link', () => {
    const { getAllByText } = render(
      <Router>
        <WorkoutBoxComponent workouts={workouts} />
      </Router>
    );

    workouts.forEach(workout => {
      const detailButtons = getAllByText('Detail').filter(
        button =>
          button.closest('a').getAttribute('href') === `/detail/${workout.id}`
      );

      expect(detailButtons.length).toBe(1);
    });
  });
});
