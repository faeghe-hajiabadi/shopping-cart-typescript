import { Routes, Route } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
function App() {
  return (
  <>
  <Navbar></Navbar>
  <Container className="mb-4">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/store' element={<Store />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  </Container></>
  )  
}

export default App
