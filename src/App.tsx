import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mobile/:id" element={<Product />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
