import React from "react";
import { Link } from "react-router-dom";

export default function App({data}) {
    console.log(data.quoteAuthor);
    return (
        <>
            <p className="text">{data.quoteText}</p>
            <Link to={`/authors/${data.quoteAuthor}`}>
                <ul className="button">
                    <li><button>{data.quoteAuthor} {data.quoteGenre}</button></li>
                    <li><button>→</button></li>
                </ul>
            </Link>
        </>
    )
}