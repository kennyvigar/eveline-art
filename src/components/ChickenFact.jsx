import { useState } from "react"

export default function ChickenFact() {

    const [fact, setFact] = useState(null)
    const [loading, setLoading] = useState(false)

    const getFact = async () => {

        setLoading(true)

        try {

            const res = await fetch("https://corsproxy.io/?https://chickenfacts.io/g")

            const text = await res.text()

            setFact(text.trim())

        } catch {

            setFact("The chicken fact machine is sleeping 🐔")

        }

        setLoading(false)

    }

    return (

        <div className="fact-section">

            <button className="fact-button" onClick={getFact}>
                🐔 Give Me a Random Chicken Fact!
            </button>

            {fact && (

                <div className="fact-box">

                    {loading ? "Loading..." : fact}

                </div>

            )}

        </div>

    )

}