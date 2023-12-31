// inicial.jsx

import React, { useState, useEffect } from 'react';
import './../styles/inicial.css'
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
// Um componente simples chamado Inicial
const Inicial = () => {

    const [images ,setImages] = useState([
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

    function verificarSenha() {
        // Obter o valor da senha digitada
        const senhaDigitada = document.getElementById('senha').value;
    
        // Verificar se a senha digitada é igual a "1231212"
        if (senhaDigitada === '1234') {
            // Redirecionar para a rota /books
            window.location.href = '/book';
        } else {
            // Senha incorreta, você pode exibir uma mensagem de erro ou fazer o que for apropriado
            console.log('Senha incorreta. Tente novamente.');
        }
    }

    return (
        <div className='background-inicial'>
            <div className='image-grid'>
                {images.map((_, index) =>
                <div className='grid-image'>
 <img key={index} src={_} alt={`Image ${index + 1}`}  />
                </div>
                   
                )}
            </div>
            <div className='principal-inicial'>
                <div className='modalLogin-inicial'>

                    <h1>Oi!</h1>
                    <div className="inputmodallogin">
                        <h2>Digite a senha para entrar:</h2>
                        <input type="password" id="senha" /><br />
                    </div>

                    <div className="buttonmodallogin">
                        <button type="button" onClick={() => verificarSenha()}>
                            Entrar
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Inicial;
