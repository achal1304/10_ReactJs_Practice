import React from 'react'
import rightArrow from './icons/right-arrow.svg'
import leftArrow from './icons/left-arrow.svg'

export default function ArrowButtons({ direction, action }) {
    return (
        <button
            className={`Arrow-${direction}`}
            onClick={action}
        >
            <img src={direction === 'right' ? rightArrow : leftArrow} />
        </button>
    )
}
