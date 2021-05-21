import Meta from './Meta'

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      {children}
    </div>
  )
}
