import '../styles/globals.css'
import Layout from '@/components/Layout/Layout'
import { NavBarPosProvider } from '@/util/context/navbarpos'

function MyApp({ Component, pageProps }) {
  return (
    <NavBarPosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavBarPosProvider>
)}

export default MyApp
