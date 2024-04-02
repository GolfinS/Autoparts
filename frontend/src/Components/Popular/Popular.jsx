import Item from '../Item/Item';
import React from 'react';

import './Popular.css';

const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>POPULAR NOW</h1>
      <hr />
      <div className="popular-item">
        {props.data.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
