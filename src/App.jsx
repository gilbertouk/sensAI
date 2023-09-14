import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClassesList from './components/ClassesList'

function App() {

  return (
    <>
    <h1>sensAI</h1>
    <Routes>
    <Route path='/teachers/home' element={<ClassesList />} />
      

    </Routes>
    </>
  )
}

export default App
