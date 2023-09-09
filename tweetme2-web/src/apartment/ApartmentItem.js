import React from 'react'
import './../styles/apartment/apartmentItem.css'


function ApartmentItem({apartment}) {
  return (
<div className='house-card-container'>
      <div className='house-card'>
        <img src={apartment.image} alt='houses' className='house-image' />

        <div className='house-details'>
          <div className='house-price'>
            <span className='house-price-amount'>Ksh.{apartment.cash_price}</span>
            <span className='house-price-month'></span>
          </div>

          <h2 className='house-name'>{apartment.name}</h2>

          <p className='house-address'>{apartment.address}</p>

          <hr className='divider' />

          <div className='house-features'>
            <div className='feature'>
            <i class="fa fa-bed" ></i>&nbsp;
              <span className='feature-text'>{apartment.beds}</span>
            </div>

            <div className='feature'>
            <i class="fa fa-bath" aria-hidden="true"></i>&nbsp;
              <span className='feature-text'>{apartment.baths}</span>
            </div>

            <div className='feature'>
            <i class="fa fa-square" aria-hidden="true"></i>&nbsp;
              <span className='feature-text'>{apartment.size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentItem