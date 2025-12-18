import React from 'react'
import { useEffect, useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const Carrusel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            nextSlide();
        }, 5000);
    }, []);
    
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return (
        <div className="carrusel">
            <BsArrowLeftCircle className='arrow arrow-left' onClick={prevSlide}/>
            {data.map((item, index) => (
                <img key={index} src={item.src} alt={item.alt} className={slide === index ? 'slide' : 'slide slide-hidden'}/>
            ))}
            <BsArrowRightCircle className='arrow arrow-right'onClick={nextSlide}/>
            <span className='indicators'>
                {data.map((_, index) => (
                    <button key={index} onClick={null} className={slide === index ? 'indicator' : 'indicator indicator-inactive'}></button>
                ))}
            </span>
        </div>
    )
}

export default Carrusel
