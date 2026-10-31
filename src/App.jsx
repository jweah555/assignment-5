import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './Layout';
import './index.css'


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
   
  );
}

export default App;
