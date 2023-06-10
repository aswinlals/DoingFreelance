import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import How from './pages/How';
import Postjob from './pages/Postjob';
import Browse from './pages/Browse';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/how" element={<How/>} />
      <Route path="/postjob" element={<Postjob/>} />
      <Route path="/browse" element={<Browse/>} />

    </Routes>
   </div>
  );
}

export default App;
