import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// tip: Use meta name="keywords" content="keywords for for search engine to display your site using keywords"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <nav className={styles.navbar}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          
          <Link href="/blog"><li>Blogs</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/"><li>Contact</li></Link>
        </ul>
       </nav>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          Hunting coder by a hunting coder
        </p>
        <h1>Blogs</h1>
        <div className={styles.grid}>
        <div className="blogs">
        <div className="blogItems">
        <h2>How to learn web-development in 2022?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
        <h2>How to learn web-development in 2022?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
        <h2>How to learn web-development in 2022?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
        <div className="blogItems">
        <h2>How to learn web-development in 2022?</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquid, obcaecati ad consectetur sequi consequuntur alias expedita modi, at ab minima sapiente sit eligendi quibusdam. Laborum sit et error vel?</p>
        </div>
      </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
