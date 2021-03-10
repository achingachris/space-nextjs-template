import Header from '../components/Header'
import TopCards from '../components/TopCards'
import Table from '../components/Table'

const Properties = () => {
  return (
    <main>
      <div className='container-fluid'>
        <Header page='Properties' path='home/properties' />
        <TopCards />
        <Table table_name='Property List' />
      </div>
    </main>
  )
}

export default Properties
