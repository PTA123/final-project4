import './App.css'
import { Toaster } from 'react-hot-toast';
import Booking from './pages/Booking';
import NonAuthLayout from './layouts/NonAuthLayout';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path='/' element={<NonAuthLayout/>}>
          <Route path='booking' element={<Booking/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
