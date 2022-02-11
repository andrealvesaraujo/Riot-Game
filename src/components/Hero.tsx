
import React, { FC } from 'react';
import './Hero.scss'

type HeroProps = {
    img: string
    name: string
    alt: string
}

export const Hero: FC<HeroProps> = ({img,name,alt}) => {

    return (
        <div className='hero'>
              <img src={img} alt={alt}/>
              <span>{name}</span>
        </div>
    )

}
