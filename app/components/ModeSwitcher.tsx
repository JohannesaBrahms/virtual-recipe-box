'use client';

import { useColorScheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Color mode' } };

// Material UI does not provide the toggle interface.
// Example interface for toggling between modes.
export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleChange() {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <FormControlLabel
      control={<Switch {...label} onChange={handleChange} />}
      label={mode === 'light' ? 'Dark' : 'Light'}
    />
  );
}
