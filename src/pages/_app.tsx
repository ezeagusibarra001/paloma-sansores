import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Red_Hat_Display } from 'next/font/google'
import { Layout } from 'mdc-ui'
import { getCssVariables } from '@/constants/Colors'
import { useRouter } from 'next/router'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <style>
        {`
                :root {
                    ${getCssVariables()}
                }
                `}
      </style>
      <Layout
        header={
          {
            logo: "/img/logo.png",
            color: "blue",
            shade: "900",
            menu: [
              {
                name: "Home",
                onClick: () => router.push("/"),
              },
              {
                name: "Sobre Mi",
                onClick: () => router.push("/sobre-mi"),
              },
              {
                name: "Capacitaciones",
                onClick: () => console.log("Capacitaciones"),
              },
              {
                name: "Eventos",
                onClick: () => console.log("Eventos"),
              },
              {
                name: "WEM",
                onClick: () => console.log("WEM"),
              },
              {
                name: "Contacto",
                onClick: () => console.log("Contacto"),
              },
              {
                name: "Admin",
                onClick: () => console.log("Contacto"),
                isButton: true,
                isOnlyDesktop: true,
              },
            ],
          }
        }
        footer={{
          logo: "/img/logo.png",
          menu: [
            {
              name: "Sobre Mi",
              onClick: () => router.push("/sobre-mi"),
            },
            {
              name: "Capacitaciones",
              onClick: () => console.log("Capacitaciones"),
            },
            {
              name: "Eventos",
              onClick: () => console.log("Eventos"),
            },
            {
              name: "WEM",
              onClick: () => console.log("WEM"),
            },
          ],
          social: [
            {
              name: "telegram",
              url: "https://www.facebook.com",
            },
            {
              name: "instagram",
              url: "https://www.instagram.com",
            },
            {
              name: "youtube",
              url: "https://www.twitter.com",
            },
            {
              name: "facebook",
              url: "https://www.instagram.com",
            },
            {
              name: "tiktok",
              url: "https://www.twitter.com",
            },
          ],
        }}
        fontFamily={red_hat_display.className}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
