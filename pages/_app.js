import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return <>
  <Navigation/>
  <Component {...pageProps} /></>;
}


function Navigation(){
  return <>
  <div
  style={{display:'flex',margin:16,padding:16, justifyContent:'space-between',width:200}}>
    <Link href={'/'}>Home</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/blog'}>Blog</Link>
  </div>
  <hr/>
  <br/></>
}