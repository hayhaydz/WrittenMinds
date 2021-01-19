import React from 'react'
import Typewriter from 'typewriter-effect';

const TutoringDetails = () => {
    return (
        <section className="TutoringDetails">
            <div className="TutoringDetails__container">
                <span className="TutoringDetails__container--subtitle">Ages</span>
                <h1 className="TutoringDetails__container--title">7 - 13</h1>
            </div>
            <div className="TutoringDetails__container">
                <span className="TutoringDetails__container--subtitle">Tutoring Hours</span>
                <h1 className="TutoringDetails__container--title">1,000</h1>
            </div>
            <div className="TutoringDetails__container">
                <span className="TutoringDetails__container--subtitle">Topics Covered</span>
                <h1 className="TutoringDetails__container--title">
                    <Typewriter
                        options={{
                            strings: ['Spellings', 'Research', 'Essays', 'Grammar', 'Thinking'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </section>
    )
}
export default TutoringDetails