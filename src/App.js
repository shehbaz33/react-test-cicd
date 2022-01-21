import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/dashboard" element={<Dashboardpage />}/>
    </Routes>
   </BrowserRouter>
  );
}

function Homepage() {
  return(
    <div>
      <h1>Homepage is working</h1>
    </div>
  )
}

function Dashboardpage() {
  return(
    <div>
      <h1>Dashboard page is working</h1>
    </div>
  )
}

export default App;
