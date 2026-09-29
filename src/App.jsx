import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Flavors from './pages/Flavors'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <footer className="footer">
        <p>Coca-Cola Site</p>
      </footer>
    </div>
  )
}

export default App