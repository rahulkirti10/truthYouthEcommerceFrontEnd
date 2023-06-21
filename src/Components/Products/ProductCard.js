import React from 'react'
import "../../Css files/Products.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductCard(props) {
  return (
    <div className='ProductCard'>
      <div className='Image'>
      <img src={props.image} alt={props.image} height="100%" width="75%" />
      </div>
      <div className='Data'>
        <label className='Title'>{props.name}<FavoriteBorderIcon sx={{ cursor:"pointer",}}/></label>
        <label className='Subtitle'>{props.subtitle}</label>
        <label className='Rating'>43 Ratings</label>
        <label className='Price'>{props.price}</label>
      </div>

    </div>
  )
}

export default ProductCard