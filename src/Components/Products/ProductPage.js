import React from 'react'
import ProductMenu from './ProductMenu'
import { useLocation } from 'react-router-dom';
import Sale from './Sale'

function ProductPage(props) {
  const location = useLocation(props);
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  return (
    <>

<ProductMenu category={category} />
</>
  )
}

export default ProductPage