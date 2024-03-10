import type { AppProps } from 'next/app'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import '../style/style.css'
// import '../style/dest/fonts.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../assets/fonts/stylesheet.css'
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null)
  const { asPath } = useRouter();

useEffect(() => {
  let locomotive: any;
  (async () => {
    try {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const dataScrollContainer = document.querySelector(
        '[data-scroll-container]',
      ) as HTMLElement | undefined

      if (!dataScrollContainer) {
        console.warn(
          'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.',
        )
      }

      locomotive = new LocomotiveScroll({
        el: dataScrollContainer ?? undefined,
        smooth: true,
      })


    } catch (error) {}
  })()

  return () => {
    locomotive?.destroy()
  }
}, [])
  return (
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />;
      </div>
  )
}