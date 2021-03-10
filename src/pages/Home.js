import Nav from '../components/Nav'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import TopCards from '../components/TopCards'
import TopCharts from '../components/TopCharts'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <div id='layoutSidenav'>
        <SideNav />
        <div id='layoutSidenav_content'>
          <main>
            <div class='container-fluid'>
              <Header />
              <TopCards />
              <TopCharts />
              <Table />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
