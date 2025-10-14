import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Original from './src/versions/original/Home'
import V1 from './src/versions/v1/Home'
import V2 from './src/versions/v2/Home'
import V3 from './src/versions/v3/Home'
import V4 from './src/versions/v4/Home'
import V5 from './src/versions/v5/Home'
import V6 from './src/versions/v6/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Original />} />
        <Route path="/1" element={<V1 />} />
        <Route path="/2" element={<V2 />} />
        <Route path="/3" element={<V3 />} />
        <Route path="/4" element={<V4 />} />
        <Route path="/5" element={<V5 />} />
        <Route path="/6" element={<V6 />} />
      </Routes>
    </Router>
  )
}

export default App

