// inicial.jsx

import React, { useState, useEffect } from 'react';
import './../styles/book.css'
import img1 from '../imgBook/img1.jpg'
import img2 from '../imgBook/img2.jpg'
import img3 from '../imgBook/img3.jpg'
import img4 from '../imgBook/img4.jpg'
import img5 from '../imgBook/img5.jpg'
import img6 from '../imgBook/img6.png'
import img7 from '../imgBook/img7.jpg'
import img8 from '../imgBook/img8.jpg'
import img9 from '../imgBook/img9.jpg'
import img10 from '../imgBook/img10.jpg'
import img11 from '../imgBook/img11.jpg'
import img12 from '../imgBook/img12.png'
import Capa from '../imgBook/capa.png'
import Atras from '../imgBook/atras2.png'
// Um componente simples chamado Inicial
const Book = () => {
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12
  ]);

  useEffect(() => {

    const intervalId = setInterval(() => {
      const index1 = Math.floor(Math.random() * images.length);
      let index2 = Math.floor(Math.random() * images.length);
      while (index2 === index1) {
        index2 = Math.floor(Math.random() * images.length);
      }
      const updatedImages = [...images];
      [updatedImages[index1], updatedImages[index2]] = [updatedImages[index2], updatedImages[index1]];
      setImages(updatedImages);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [images]);

  
  return (
    <div className='background-inicial'>
      <div className='image-grid'>
        {images.map((_, index) =>
          <img key={index} src={_} alt={`Image ${index + 1}`} className='grid-image' />
        )}
      </div>
      <div className='principal-inicial'>
        <div className='booktwist'>
          <div class="container">
            <div class="content">
              <div class="front"><img src={Atras} /></div>
              <div class="back"> <img src={Capa} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
