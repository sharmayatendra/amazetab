import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const [quote,setQuote] = useState("")

    useEffect(() => {
        (async () => {
            const resp = await axios.get("https://type.fit/api/quotes")
            const randomNum = Math.floor(Math.random() * 1000);
            setQuote(resp.data[randomNum])
        })()
    },[])
  return (
    <>
    <h2 className="landing-page-heading subheading quotes" >{quote.text}</h2>
    </>
  )
}

export { Quotes }