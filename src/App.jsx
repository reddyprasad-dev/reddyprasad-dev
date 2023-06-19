import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'

import Projects from './components/Projects'

import Project from './components/Project'

import './App.css'

const App = () => (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<Project />} />
    </Routes>
)

export default App