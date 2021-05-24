import Meta from './Meta'
import Header from '@/components/Header'

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}
