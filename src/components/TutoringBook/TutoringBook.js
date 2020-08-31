import React from 'react'

const TutoringBook = () => {
    return (
        <section className="TutoringBook" id="book">
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="Bookings" className="TutoringBook__form">
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="book"/>
                <div className="TutoringBook__form--rowHalf">
                    <input type="text" name="Name" className="TutoringBook__form--input" placeholder="Name" required/>
                    <input type="email" name="Email" className="TutoringBook__form--input" placeholder="Email" required/>
                </div>
                <div className="TutoringBook__form--twoThirds">
                    <input type="text" name="Telephone" className="TutoringBook__form--input TutoringBook__form--twoThirds--inputLong" placeholder="Telephone"/>
                    <input type="text" name="Child's-Age" className="TutoringBook__form--input TutoringBook__form--twoThirds--inputShort" placeholder="Child's Age" required/>
                </div> 
                <div className="TutoringBook__form--twoThirds">
                    <select name="Child's-English-Ability" className="TutoringBook__form--input TutoringBook__form--twoThirds--inputLong TutoringBook__form--input--select" required >
                        <option value="">Child's English ability</option>
                        <option value="Poor">Poor</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                    </select>
                    <div className="TutoringBook__form--inputIconGroup">
                        <label htmlFor="Start-Date" className="TutoringBook__form--inputIconGroup--label">Start Date</label>
                        <input type="date" name="Start-Date" className="TutoringBook__form--input TutoringBook__form--twoThirds--inputShort TutoringBook__form--inputIconGroup--input" placeholder="Start Date"></input>
                    </div>
                </div>
                <div className="TutoringBook__form--rowFull">
                    <textarea name="Additional-Information" placeholder="Additional Information" className="TutoringBook__form--textarea" ></textarea>
                </div>
                <div className="TutoringBook__form--rowFull">
                    <button type="submit" className="TutoringBook__form--btn">Send</button>
                </div>
            </form>
        </section>
    )
}
export default TutoringBook