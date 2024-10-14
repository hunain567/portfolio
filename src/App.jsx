
import { Route, Routes } from 'react-router-dom';
import Home from './Home'; // Make sure this file exists
import Blog from './blog'; // Make sure this file exists

const App = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes as needed */}
    </Routes>
);

export default App;
