'use client';

import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { supabase } from '../app/lib/supaBaseClient'; // Adjust the import to your actual path
import { useRouter } from 'next/navigation'; // Use Next.js router for navigation

export default function ComboBox() {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize Next.js router for navigation

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('name'); // Fetch category names
      if (error) {
        console.error("Error fetching categories:", error.message);
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

  const handleSelect = (event: any, value: string | null) => {
    if (value) {
      // Navigate to the selected category using router
      router.push(`/categories/${value}`);
    }
  };

  return (
    <Autocomplete
      disablePortal
      options={categories}
      sx={{ width: 370, backgroundColor: 'var(--white)', borderRadius: '10px', }} // Set background color
      onChange={handleSelect} // Handle dropdown selection
      renderInput={(params) => <TextField {...params} label="All Categories" />}
    />
  );
}
