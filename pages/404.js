import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/404.module.css'

const pagenotfound = () => {
  return (
    <div>
      <Header />

      <section className={styles.masthead}>
        <div className='container h-100'>
          <div className='row h-100 align-items-center'>
            <div className='col-12 text-center'>
                <Image src='/404.svg' width={500} height={500} />
              <h1 className='font-weight-light'>404 | Page Not Found</h1>
              <p className='lead'>Sorry</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default pagenotfound
