import type { AppProps } from 'next/app'
import '../style/style.css'
// import '../style/dest/fonts.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/fonts/stylesheet.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}