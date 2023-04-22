import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Theme from './store/Theme';

function App() {
    return (
        <Theme>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mobile/:id" element={<Product />} />
                </Routes>
            </Router>
        </Theme>
    );
}

export default App;
