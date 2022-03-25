import React from 'react'
import Wave from './Images/image-wave1.png';
import Statues from "./Images/image-statue.png"

import "./style.css"
import LandingWave from '../../../Courses/Utils/LandingWave';


export default function Landing() {

    return (
        <div>
            <div style={{ position: "relative" }}>
                <img src={Wave} className="image-course-surya-kriya-wave" />
            </div>
            <div style={{ position: "relative" }}>
                <img src={Statues} className="image-course-surya-kriya-right" />
            </div>

            <LandingWave
                data={{
                    title: "Yogasanas",
                    subtitle: "Yoga for Wellbeing",
                    description: "Yogasanas are a set of poweful postures though which we can elevate one's consciousness and manipulate energies",
                    quote: "If you consciously hold an asana, it can alter the way you think, feel, and experience life. This is what Hatha Yoga can do."
                }} />
        </div>
    )
}