import React from 'react'

function Brands() {
  return (
    <div className='Brands'>
     <div className='BrandTitle'>
    <label className='One'>Shop By Brands</label>
    </div>

    <div className='BrandList'>
        <div className='BrandListCard'>
           <img src='../../Images/zara.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        <div className='BrandListCard'>
        <img src='../../Images/dolce-gabbana-1.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        <div className='BrandListCard'>
        <img src='../../Images/h-m.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        <div className='BrandListCard'>
        <img src='../../Images/chanel-2.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        <div className='BrandListCard'>
        <img src='../../Images/prada.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        <div className='BrandListCard'>
        <img src='../../Images/armani.svg' alt='h&m' height="70%" width="70%"/>
        </div>
        </div>
    </div>
  )
}

export default Brands