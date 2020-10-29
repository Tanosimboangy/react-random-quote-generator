import React, {useState, useEffect} from "react";

export default function App() {
    const [data, setData] = useState([]);

    async function FetchingData() {
        const el = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10");
        const res = await el.json();
        setData(res.quotes);
    }

    useEffect(() => {
        FetchingData();
    }, [])

    function randomData() {
        const item = Math.floor(Math.random() * data.length);
        item(data);
    }

    function HandlClick() {
        const oneRandomeQuote = randomData();
        setData(oneRandomeQuote.quoteText);
        // setQuoteAuth(oneRandomeQuote.qouteAuthor);
        console.log(oneRandomeQuote)
    }

    return (
        <>
            <h1>Random Quotes Generator</h1>
            <div key={data.id}>
                <h2>{data.quoteText}</h2>
                <button type="button" onClick={HandlClick}>Button</button>
            </div>
        </>
    )
}