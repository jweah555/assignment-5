import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './Layout';
import './index.css'
import Cast from './Cast';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/cast" element={<Cast />} />
        </Routes>
      </Router>
   
  );
}

export default App;
