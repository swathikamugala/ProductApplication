import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Layouts/Navbar';
import Item from './components/Items/Item';
import AddItem from './components/Items/AddItem';
import EditItem from './components/Items/EditItem';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/Items/:id" element={<Item/>}>Item</Route>
        <Route path="/Items/add" element={<AddItem/>}>AddItem</Route>
        <Route path="/Items/edit/:id" element={<EditItem/>}>EditItem</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
