import styles from './page.module.css';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Your Virtual Recipe Box</h1>
      <Link href="/recipes/create" component={NextLink}>
        Create New Recipe
      </Link>
    </main>
  );
}
