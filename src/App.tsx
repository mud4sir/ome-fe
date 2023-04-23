import './styles/App.css';
import Home from './pages/Home';
import Product from './pages/Product';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mobile/:id" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;
