import React, { useContext } from 'react';
import PartsItem from '../PartsItem/PartsItem';
import { StoreContext } from '../../Context/StoreContext';

import './Mechanical.css';

const Mechanical = ({category}) => {

  const {parts_list} = useContext(StoreContext);


  return (
    <div className='parts-display' id='parts-display'>
      <h2>Last Product Add</h2>
      <div className='parts-display-list'>
        {parts_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <PartsItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} amount={item.amount} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default Mechanical