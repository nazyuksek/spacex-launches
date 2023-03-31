import Header from "@/components/Header";
import { DateProvider } from "@/context/DateContext";
import { LaunchesProvider } from "@/context/LaunchesContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DateProvider>
      <LaunchesProvider>
        <Header />
        <Component {...pageProps} />
      </LaunchesProvider>
    </DateProvider>
  );
}
