import React, {useState, useEffect} from "react";
import { Link, useParams, BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function NewLists() {

    const [newData, setNewData] = useState([]);
    const  { authorName } = useParams();
    console.log(authorName);
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
    console.log(newData);
    
    return (
        <div className="sub-container">
            <ul>{newData.map((newDt) => (
                <li key={newDt.id}>{newDt.quoteText}</li>
            ))}</ul>
            <Link to={"/"}><button>GO BACK  →</button></Link>
        </div>
    )
}
