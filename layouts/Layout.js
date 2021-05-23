import Meta from './Meta'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <Header />
      <main>
        <Hero />
        {children}
      </main>
    </div>
  )
}
