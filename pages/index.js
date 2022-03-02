//our-domain.com/

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List - Home</title>
        <meta name='keywords' content='Ninjas' />
      </Head>
      <div>
        <h1 classname={styles.title}>Homepage</h1>
        <p className={styles.text}>Reprehenderit proident esse reprehenderit minim exercitation fugiat ullamco quis incididunt occaecat pariatur cillum. Eu ea et esse sint in amet proident nisi dolore aute magna ullamco. Anim nulla sint qui reprehenderit. Aliquip aliquip cillum labore laborum elit occaecat anim adipisicing labore ullamco. In fugiat labore consequat incididunt eu. Anim proident laboris esse culpa ad minim magna et sint non.</p>
        <p className={styles.text}>Reprehenderit proident esse reprehenderit minim exercitation fugiat ullamco quis incididunt occaecat pariatur cillum. Eu ea et esse sint in amet proident nisi dolore aute magna ullamco. Anim nulla sint qui reprehenderit. Aliquip aliquip cillum labore laborum elit occaecat anim adipisicing labore ullamco. In fugiat labore consequat incididunt eu. Anim proident laboris esse culpa ad minim magna et sint non.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
