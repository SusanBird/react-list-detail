//HOME

import React, { useEffect, useState } from 'react';
import './App.css';
import BestsellersListPage from './BestsellersListPage';

export default function BestsellersPage() {
  const [bestsellers, setBestsellers] = useState([]);
  const [lastPage, setLastPage] = useState(100);
  const [page, setPage] = useState(1);



  return (
    <>
      <h2>Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
      </div>
    </>
  );
}
