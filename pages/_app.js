import Navigationbar from '../components/Navigationbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Navigationbar/>
    <Component 
    {...pageProps} />
    
    </>
    )
}

export default MyApp
