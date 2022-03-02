//our-domain.com/Ninjas
//this function runs at build time,
//as our app is built, and our components rendered
//only ran at build time. not client/browser

import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map((ninja) => {
                return (
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}

export default Ninjas;
