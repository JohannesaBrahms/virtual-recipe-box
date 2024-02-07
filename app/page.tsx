import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Virtual Recipe Box</h1>
      <Link href="/create-recipe">Create New Recipe</Link>
    </main>
  );
}
