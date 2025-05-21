import './App.css';
import Math from './Components/Math';
import Info from './Components/InputInfo';
import Workout from './Components/WorkoutList';
import Colorlist from './Components/Color';
import Layout from './Components/Layout';
import Hjem from './Components/Hjem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Layout />
            <Routes>
                <Route path="/" element={<Hjem />} />
                <Route path="/Color" element={<Colorlist />} />
                <Route path="/Math" element={<Math />} />
                <Route path="/WorkoutList" element={<Workout />} />
                <Route path="/InputInfo" element={<Info />} />
            </Routes>
        </Router>
    );
}

export default App;