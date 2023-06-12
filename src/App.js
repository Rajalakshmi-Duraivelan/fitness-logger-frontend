import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return ( 
    <Router>
    <Navbar/>
      <br/>
      
      <Routes>
        <Route path="/" exact element={<ExercisesList/>} ></Route>
        <Route path="/edit/:id" element={<EditExercises />} />
        <Route path="/create" element={<CreateExercise />}></Route>
        <Route path="/user" element={<CreateUser />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
