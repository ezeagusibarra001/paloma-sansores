import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Red_Hat_Display } from "next/font/google";
import { Layout } from "mdc-ui";
import { getCssVariables } from "@/constants/Colors";
import { useRouter } from "next/router";
import { AppProvider } from "@/context/AppStore";
import { Toaster } from "react-hot-toast";

const red_hat_display = Red_Hat_Display({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <AppProvider>
        <style>
          {`
                :root {
                    ${getCssVariables()}
                }
                `}
        </style>
        <Layout
          header={{
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
                onClick: () => router.push("/capacitaciones"),
              },
              {
                name: "Eventos",
                onClick: () => router.push("/eventos"),
              },
              {
                name: "WEM",
                onClick: () => router.push("/wem"),
              },
              {
                name: "Contacto",
                onClick: () => router.push("/contacto"),
              },
              {
                name: "Admin",
                onClick: () => router.push("/admin"),
                isButton: true,
                isOnlyDesktop: true,
              },
            ],
          }}
          footer={{
            logo: "/img/logo.png",
            menu: [
              {
                name: "Sobre Mi",
                onClick: () => router.push("/sobre-mi"),
              },
              {
                name: "Capacitaciones",
                onClick: () => router.push("/capacitaciones"),
              },
              {
                name: "Eventos",
                onClick: () => router.push("/eventos"),
              },
              {
                name: "WEM",
                onClick: () => router.push("/wem"),
              },
            ],
            social: [
              {
                name: "telegram",
                url: "https://t.me/palomasansores",
              },
              {
                name: "instagram",
                url: "https://www.instagram.com/palomasansores/",
              },
              {
                name: "youtube",
                url: "https://www.youtube.com/@palomasansores",
              },
              {
                name: "facebook",
                url: "https://www.facebook.com/PalomaSansoresOfficial/",
              },
              {
                name: "tiktok",
                url: "https://www.tiktok.com/@palomasansores.cm",
              },
            ],
          }}
          fontFamily={red_hat_display.className}
        >
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
