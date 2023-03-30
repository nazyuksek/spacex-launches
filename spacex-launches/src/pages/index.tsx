import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import LaunchesPage from "./launches";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <LaunchesPage />;
}
