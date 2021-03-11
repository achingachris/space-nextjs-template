import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Menu from './components/Menu'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Properties from './pages/Properties'
import Property from './pages/Property'
import Tenants from './pages/Tenants'
import Tenant from './pages/Tenant'

const App = () => {
  return (
    <Router>
      <Menu />
      <div id='layoutSidenav'>
        <SideNav />
        <div id='layoutSidenav_content'>
          <Route path='/' component={Home} exact />
          <Route path='/properties' component={Properties} />
          <Route path='/property/name' component={Property} />
          <Route path='/tenants' component={Tenants} />
          <Route path='/tenant/name' component={Tenant} />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
