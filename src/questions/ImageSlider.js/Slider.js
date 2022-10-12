import { useState } from "react"
import React from 'react'
import dataSlider from "./dataSlider"
import ArrowButtons from "./ArrowButtons"
import './Slilder.css'

export default function Slider() {
    const [activeIndex, setactiveIndex] = useState(1)

    const moveRight = () => {
        if (activeIndex !== dataSlider.length) {
            setactiveIndex(activeIndex + 1)
        } else {
            setactiveIndex(1)
        }
        console.log(activeIndex)
    }
    const moveLeft = () => {
        if (activeIndex !== 1) {
            setactiveIndex(activeIndex - 1)
        } else {
            setactiveIndex(dataSlider.length)
        }
        console.log(activeIndex)
    }

    const moveDot = index => {
        setactiveIndex(index+1);
    }

    return (
        <div>
            <div className="Image-Display">
                {dataSlider.map((item, index) => {
                    return (
                        <img className={activeIndex === index + 1 ? 'image-active' : 'image-hidden'} alt={item.id} src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
                    )
                })}
                <ArrowButtons direction='left' action={moveLeft} />
                <ArrowButtons direction='right' action={moveRight} />

                <div className="bg_dot">
                    {Array.from({ length: 5 }).map((item, index) => {
                        return (
                            <div onClick={() => moveDot(index)} className={activeIndex === index + 1 ? 'dot active' : 'dot'}>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
