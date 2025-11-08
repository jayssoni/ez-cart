import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext)
  let navigate = useNavigate()

  // Truncate long product names
  const truncateName = (text, maxLength = 40) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Format price with currency
  const formatPrice = (price) => {
    return `${currency} ${price}`;
  };

  return (
    <div
      className='w-full max-w-[300px] h-[400px] bg-card rounded-lg border border-border shadow-sm cursor-pointer overflow-hidden flex flex-col p-4 hover:shadow-md hover:scale-[1.02] transition-all duration-300 mx-auto group'
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      {/* Image Container - Fixed height */}
      <div className='w-full h-[65%] rounded-lg overflow-hidden bg-secondary'>
        <img 
          src={image} 
          alt={name} 
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
        />
      </div>
      
      {/* Content Container - Fixed height with proper spacing */}
      <div className='flex-1 flex flex-col justify-between pt-3'>
        {/* Product Name with truncation */}
        <div className='text-foreground text-base font-medium leading-tight min-h-[48px] flex items-start'>
          {truncateName(name)}
        </div>
        
        {/* Price - Always at bottom */}
        <div className='text-accent text-lg font-semibold mt-2'>
          {formatPrice(price)}
        </div>
      </div>
    </div>
  )
}

export default Card