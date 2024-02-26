import { Typography } from '@mui/material';
import styles from './page.module.css';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h4">Welcome to Your Virtual Recipe Box</Typography>
      <Link href="/recipes/create" component={NextLink}>
        Create New Recipe
      </Link>
    </main>
  );
}
