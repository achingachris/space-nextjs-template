import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Nav from './components/Nav'
// import SideNav from './components/SideNav'
// import Footer from './components/Footer'

import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Route path='/' component={Home} exact />
    </Router>
  )
}

export default App
