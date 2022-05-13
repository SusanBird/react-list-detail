import React from 'react';
import { Link } from 'react-router-dom';

export default function BestsellerItem({ bestseller }) {
  return (
    <Link to={`/BestsellersDetailPage/${bestseller.id}`}> 
      <div className='bestseller-item'>
        <h2>{bestseller.Name}</h2>
        <h3>by {bestseller.Author}</h3>
      </div>
    </Link>
  );
}
