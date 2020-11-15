import Img from 'next/image'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      
    <h1>Hello World &rarr;</h1>
    <h3>Examples &rarr;</h3>
    <p>Discover and deploy boilerplate example Next.js projects.</p>

    <Img src='/pic.jpg' width={800} height={600} alt='Avatar' />
    
    </div>
  )
}
