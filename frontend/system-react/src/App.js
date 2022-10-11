import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Form />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
