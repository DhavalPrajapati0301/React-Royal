import React, { useState } from 'react'


export const InputDemo3 = () => {

    const [seleteddate, setseleteddate] = useState()
    const [issubmitted, setissubmitted] = useState(false)

    const getlabel = (date) => {
        const today = new Date()
        const choosedate = new Date(date)

        today.setHours(0, 0, 0, 0)
        choosedate.setHours(0, 0, 0, 0)

        const diffdays = Math.round((choosedate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
        console.log(diffdays)

        switch (diffdays) {
            case -2:
                return "Day Before Yesterday"
            case -1:
                return "Yesterday"
            case 0:
                return "Today"
            case 1:
                return "Tommorow"
            case 2:
                return "day after Tommorow"
            default:
                if (diffdays > 0) {
                    return `after  ${diffdays}  days`
                }
                else {
                    const finaldays = -1 * diffdays;
                    return `before  ${finaldays}  days`
                }
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>InputDemo3</h1>
            <div>
                <label >Date</label>
                <input type="date" name="" id="" onChange={(event) => { setseleteddate(event.target.value) }} />
            </div>

            <div>
                <button onClick={() => { setissubmitted(true) }}>Submit</button>
            </div>
            <div>
                {
                    issubmitted && <div>
                        <h1>Date =  {seleteddate}</h1>
                        <h1>{getlabel(seleteddate)}</h1>
                    </div>
                }
            </div>
        </div>
    )
}
