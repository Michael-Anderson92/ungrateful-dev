'use client';

import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { supabase } from '../app/lib/supaBaseClient'; // Adjust the import to your actual path

export default function ComboBox() {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('name');
      if (error) {
        setError(error.message);
        return;
      }
      setCategories(
        Array.isArray(data) ? data.map((category: { name: string }) => category.name) : []
      );
          };
    fetchCategories();
  }, []);

  if (error) {
    return <div>Error fetching categories: {error}</div>;
  }

  return (
    <Autocomplete
      disablePortal
      options={categories}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
  );
}
