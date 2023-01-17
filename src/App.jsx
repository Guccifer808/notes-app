import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import Notes from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/add-note' element={<AddNote />} />
        <Route path='/edit-note/:id' element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
