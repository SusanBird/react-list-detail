import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBestsellerById } from './services/fetch-utils';
import { useParams } from 'react-router-dom';

export default function BestsellersDetailPage() {
  const [bestseller, setBestseller] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const bestsellerData = await getBestsellerById(params.id);

      setBestseller(bestsellerData);
    }

    fetch();
  }, [params.id]);

  function handleBestsellerClick() {
    window.location.href = `${bestseller.link}`;
  }
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='bestseller-detail' onClick={handleBestsellerClick}>
        <div className='bestseller-data'>
          <h2>{bestseller.Name}</h2>
          <h3>by {bestseller.Author}</h3>
          <p>{bestseller.Reviews} reviews</p>
          <p>{bestseller.Year}</p>
          <p>Genre: {bestseller.Genre}</p>
          <p>Price: ${bestseller.Price}</p>

        </div>

      </div>
    </>
  );
}
