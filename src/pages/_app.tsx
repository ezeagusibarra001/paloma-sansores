import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Red_Hat_Display } from 'next/font/google'
import { Layout } from 'mdc-ui'

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout
        footer={{
          logo: "/logo.png",
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
        header={
          {
            logo: "/logo.png",
            color: "blue",
            shade: "900",
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
          }
        }>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}
