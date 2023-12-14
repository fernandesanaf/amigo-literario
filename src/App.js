import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Inicial from './pages/inicial';
import Book from './pages/book';

function App() {
  return (
   <Router>
<Routes>
  <Route path={`/`} element={<Inicial/>} />
  <Route path={`/book`} element={<Book/>} />
</Routes>
   </Router>
  );
}

export default App;
