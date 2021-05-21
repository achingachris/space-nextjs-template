import Meta from './Meta'
import MainNav from '@/components/home/MainNav'
import MainFooter from '@/components/home/MainFooter'

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <MainNav />
      <main>{children}</main>
      <MainFooter />
    </div>
  )
}
