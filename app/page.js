import Image from "next/image";
import Head from "next/head";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import axios from "axios";
import { URL } from "./Utils";

export default async function Home(props) {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
// export async function getStaticProps() {
//   console.log("respo", response);
//   return { props: { category: response.data } };
// }
