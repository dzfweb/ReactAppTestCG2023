import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import WorkoutBoxComponent from './Components/WorkoutBoxComponent/WorkoutBoxComponent';


describe('WorkoutBoxComponent', () => {
  it('displays the workouts fetched from the API', async () => {
    // Set up a mock for the GetWorkouts function
    const mockGetWorkouts = jest.fn(() => Promise.resolve([
      { id: 1, title: 'Workout 1', thumbnail: 'image1.jpg', duration: 30, levelTag: 'Intermediate', impactTag: 'Low', description: 'A workout for intermediate level athletes with low impact exercises.' },
      { id: 2, title: 'Workout 2', thumbnail: 'image2.jpg', duration: 45, levelTag: 'Advanced', impactTag: 'High', description: 'A workout for advanced level athletes with high impact exercises.' }
    ]));
    jest.mock('./Services/WorkoutServices', () => ({
      GetWorkouts: mockGetWorkouts
    }));

    // Render the component
    render(<WorkoutBoxComponent />);

    // Wait for the data to be fetched and displayed
    await screen.findByText('Workout 1');
    await screen.findByText('Workout 2');
  });
});