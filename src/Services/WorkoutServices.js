const url = "http://localhost:3001/workouts";

export async function GetWorkouts() {
    let data = [];
    const res = await fetch(url);
    data = await res.json();    
    return data;
}

export async function GetWorkoutById(id) {
    let data = await GetWorkouts();
    return data.find((el) => el.id === id);
}
