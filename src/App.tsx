import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
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
