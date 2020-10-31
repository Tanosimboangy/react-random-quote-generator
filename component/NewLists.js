import React, {useState, useEffect} from "react";
import { Link, useParams, BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function NewLists({data}) {
    const [newData, setNewData] = useState([]);
    const  { authorName } = useParams();

    async function FetchingNewData() {
        try {
            const newEl = await fetch(`https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=10`);
            const newRes = await newEl.json();
            setNewData(newRes.quotes);
        }catch(e) {
            console.log(e);
        }
    }
    useEffect(() => {
        FetchingNewData();
    }, [])
    return (
        <div className="sub-container">
            <p>{data.quoteAuthor}</p>
            <ul>{newData.map((newDt) => (
                <li key={newDt.id}>{newDt.quoteText}</li>
            ))}</ul>
            <Link to={"/"}><button>GO BACK  →</button></Link>
        </div>
    )
}
