import React, { useEffect, useRef } from 'react'
import './style.css'
import PlanGif from '../../assets/images/plan.gif'
import CloudImg from '../../assets/images/cloud.png'

export default function Banner() {
    const subTitleRef = useRef()
    const blinkingCursorRef = useRef()
    const intervalRef = useRef()

    useEffect(() => {
        startTypingTitle()
        return () => clearInterval(intervalRef.current)
    },[])

    const startTypingTitle = () => {
        const sentence = '> A SOFTWARE ENGINEER'
        let currentIndex = 0
        intervalRef.current = setInterval(() => {
            ++currentIndex
            subTitleRef.current.innerText = sentence.substring(0, currentIndex)
            if (!sentence[currentIndex]) {
                clearInterval(intervalRef.current)
                startBlinkingCursor()
            }
        }, 100)
    }

    const startBlinkingCursor = () => {
        intervalRef.current = setInterval(() => {
            blinkingCursorRef.current.classList.toggle('hide-element')
        }, 500)
    }

    return (
        <div className='banner-container center-content'>
            <img src={PlanGif} className='plan-img' />
            <img src={CloudImg} className='cloud-img cloud-1' />
            <img src={CloudImg} className='cloud-img cloud-2' />
            <img src={CloudImg} className='cloud-img cloud-3' />
            <h1 className='title'>Zuhair Naqi</h1>
            <div className='sub-title-container'>
                <h1 className='sub-title' ref={subTitleRef}></h1>
                <h1 className='sub-title hide-element' ref={blinkingCursorRef}>_</h1>
            </div>
        </div>
    )
}