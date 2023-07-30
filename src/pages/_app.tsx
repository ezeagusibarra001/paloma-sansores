import '@/styles/globals.css'
import { CssBaseline } from 'mdc-ui'
import type { AppProps } from 'next/app'
import { Red_Hat_Display } from 'next/font/google'
import { Layout } from 'mdc-ui'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={red_hat_display.className} header={{
      logo: "/next.svg",
      color: "blue",
      shade: "900"
    }}>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  )

}
