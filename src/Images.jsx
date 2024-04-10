import React from 'react'
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from  './assets/img3.png';
import img4 from  './assets/img4.png';
import img5 from './assets/bookStore_img.png'


export const Images = () => {
  return (
    <div className='flex flex-wrap gap-3'>
        <img src={img1} alt=""  className='w-[180px] h-[180px]'/>
        <img src={img2} alt=""  className='w-[180px] h-[180px]'/>
        <img src={img3} alt="" className='w-[180px] h-[180px]' />
        <img src={img4} alt="" className='w-[180px] h-[180px]' />
        <img src={img5} alt="" className='w-[180px] h-[180px]' />
    </div>
  )
}
