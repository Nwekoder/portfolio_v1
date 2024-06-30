import style from './HeroSection.module.css'
import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function HeroSection() {
    return (
        <header>
            <h1>Nwekoder</h1>
            <TypeAnimation
                wrapper="p"
                sequence={[
                    'Full-Stack Web Developer.',
                    2000,
                    'Back-End Python Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Front-End Developer',
                    2000,
                    'Graphic Designer'
                ]}
                speed={45}
                repeat={Infinity}
            />
        </header>
    )
}
