import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Red_Hat_Display } from 'next/font/google'
import { Layout } from 'mdc-ui'
import { CssBaseline } from 'mdc-ui'
import { getCssVariables } from '@/constants/Colors'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
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
                onClick: () => console.log("Home"),
              },
              {
                name: "Sobre Mi",
                onClick: () => console.log("Sobre Mi"),
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
              name: "Mis cursos",
              onClick: () => console.log("Mis cursos"),
            },
            {
              name: "Eventos",
              onClick: () => console.log("Eventos"),
            },
            {
              name: "Mentorias",
              onClick: () => console.log("Mentorias"),
            },
            {
              name: "Sobre WEM",
              onClick: () => console.log("Mentorias"),
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
