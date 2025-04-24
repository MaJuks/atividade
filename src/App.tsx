import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Styled} from './pages/Styled'
import {Tailwind} from './pages/Tailwind'
import {Main} from './pages/Main'

function App() {
  
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/styled' element={<Styled/>}/>
        <Route path='/tailwind' element={<Tailwind/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
