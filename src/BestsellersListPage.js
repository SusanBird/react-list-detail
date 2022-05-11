import React from 'react';
import BestsellerItem from './BestsellerItem';


export default function BestsellersListPage({ bestsellers }) {
  return (
    <div className='bestsellers'>
      {bestsellers.map((bestseller, i) => 
        <BestsellerItem key={bestseller + i} bestseller={bestseller} />
      )}{''}
    </div>
  );
}
