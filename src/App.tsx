import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Profile from './pages/Profile';
import Porto from './pages/Porto';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen w-full">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/porto" element={<Porto />} />
          </Routes>
        </main>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
