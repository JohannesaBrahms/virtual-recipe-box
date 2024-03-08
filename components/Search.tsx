'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <TextField
        id="outlined-search"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MagnifyingGlassIcon style={{ width: 18, height: 18 }} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
