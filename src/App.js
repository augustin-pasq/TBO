import {useEffect, useState} from "react"

export default function App() {
    let [intervalState, setIntervalState] = useState((new Date((new Date("2023-12-25T08:00:00")).getTime() >= (new Date()).getTime() ? "2023-12-25T08:00:00" : "2024-02-19T15:00:00").getTime()) - (new Date()).getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setIntervalState((new Date((new Date("2023-12-25T08:00:00")).getTime() >= (new Date()).getTime() ? "2023-12-25T08:00:00" : "2024-02-19T15:00:00").getTime()) - (new Date()).getTime())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main>
            <h1>It remains</h1>

            <section>
                <div>
                    <span>{((((new Date(intervalState)).getUTCFullYear() - 1970) * 12) + (new Date(intervalState)).getMonth()).toString().padStart(2, "0")}</span>
                    <label>{parseInt(((((new Date(intervalState)).getUTCFullYear() - 1970) * 12) + (new Date(intervalState)).getMonth()).toString().padStart(2, "0")) > 1 ? "months" : "month"}</label>
                </div>

                <div>
                    <span>{((new Date(intervalState)).getUTCDate() - 1).toString().padStart(2, "0")}</span>
                    <label>{parseInt(((new Date(intervalState)).getUTCDate() - 1).toString().padStart(2, "0")) > 1 ? "days" : "day"}</label>
                </div>

                <div>
                    <span>{((new Date(intervalState)).getUTCHours()).toString().padStart(2, "0")}</span>
                    <label>{parseInt((new Date(intervalState)).getUTCHours().toString().padStart(2, "0")) > 1 ? "hours" : "hour"}</label>
                </div>

                <div>
                    <span>{((new Date(intervalState)).getUTCMinutes()).toString().padStart(2, "0")}</span>
                    <label>{parseInt((new Date(intervalState)).getUTCMinutes().toString().padStart(2, "0")) > 1 ? "minutes" : "minute"}</label>
                </div>

                <div>
                    <span>{((new Date(intervalState)).getUTCSeconds().toString().padStart(2, "0"))}</span>
                    <label>{parseInt((new Date(intervalState)).getUTCSeconds().toString().padStart(2, "0")) > 1 ? "seconds" : "second"}</label>
                </div>
            </section>

            <p>before leaving IUT.</p>
        </main>
    )
}