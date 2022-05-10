//HOME

import React, { useEffect, useState } from 'react';
import './App.css';
import BestsellersListPage from './BestsellersListPage';
import { getBestseller } from './services/fetch-utils';

export default function BestsellersPage() {
  const [bestsellers, setBestsellers] = useState([]);
  const [lastPage, setLastPage] = useState(100);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetch() {
      const bestbooks = await getBestseller(page);

      setBestsellers(bestbooks.body);
      setLastPage(bestbooks.lastPage);
    }

    fetch();
  }, [page]);

  return (
    <>
      <h2>Page {page}</h2>
      <div className='buttons'>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <BestsellersListPage bestsellers={bestsellers} />
    </>
  );
}
