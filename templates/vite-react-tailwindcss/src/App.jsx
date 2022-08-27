import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About, Home } from './pages'

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App
