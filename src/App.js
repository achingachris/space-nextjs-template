import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Properties from './pages/Properties'

function App() {
  return (
    <Router>
      <Menu />
      <div id='layoutSidenav'>
        <SideNav />
        <div id='layoutSidenav_content'>
          <Route path='/' component={Home} exact />
          <Route path='/properties' component={Properties} />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
