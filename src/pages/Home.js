import Header from '../components/Header'
import TopCards from '../components/TopCards'
import TopCharts from '../components/TopCharts'
import Table from '../components/Table'

const Home = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Dashboard' path='home' />
        <TopCards />
        <TopCharts />
        <Table />
      </div>
    </main>
  )
}

export default Home
