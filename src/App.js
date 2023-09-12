import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/navbar.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import EditExercise from './components/edit-exercise.component';
import ExerciseList from './components/exercises-list.component';


function App() {
  return (
      <Router className="routes">
      <Navbar/>
      <Routes>
      <Route path="/" element={<ExerciseList/>}/>
      <Route path="/edit/:id" element={<EditExercise/>}/>
      <Route path="/create" element={<CreateExercise/>}/>
      <Route path="/user" element={<CreateUser/>}/>
    </Routes>
    </Router> 
  );
}

export default App;