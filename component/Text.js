import React from "react";

export default function App({data, setData, handleClick}) {
    return (
        <>
            <p className="text">{data.quoteText}</p>
            <button type="button" onClick={handleClick}>{data.quoteAuthor}<br/><small>{data.quoteGenre}</small></button>
        </>
    )
}