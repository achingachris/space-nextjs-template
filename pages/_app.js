import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/scss/bootstrap.scss'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return <Component {...pageProps} />
}
