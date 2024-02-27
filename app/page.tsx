import { Typography } from '@mui/material';
import styles from './page.module.css';
import { Button } from './components/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h3">Virtual Recipe Box</Typography>
      <Button href="/recipes/create" label="Create New Recipe" />
    </main>
  );
}
