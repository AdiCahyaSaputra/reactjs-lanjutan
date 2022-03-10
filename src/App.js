import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

/**
import Home from './Home'
import About from './About'
import AboutTeam from './AboutTeam'
**/

import Blog from './Blog'
import BlogDetail from './BlogDetail'
import NotFound from './NotFound'

// import Button from './Button'; // g usah .js juga dah tau kok react mah

function App() {
  /**
   * Nulis komponen gk melulu harus closing tag yah!
  **/
  
  /**
   * path absolute "/path"
   * tau kan ini apa ?
   * jadi seolah olah "/" itu ya root nya sistem kita
  **/
  
  /**
   * React Routes -> grup dari Route
   * React Route -> ya route nya
   * Link -> pengganti <a></a>
  **/
  
  /**
   * Child route
   * route di dalam route
   * jadi memungkinkan kita untuk menampilkan component lain di halaman yg sama
   * dengan route yg berbeda / sub route nya
  **/
  
  /**
   * Wild card / parameter di URL
   * /path/:namaWildCard -> return obj dari useParams()
   * useParams().namaWildCard
  **/
  
  return (
    <div className="App">
      <nav>
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:artikel" element={<BlogDetail />} />
        
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </div>
  );
}

export default App;
