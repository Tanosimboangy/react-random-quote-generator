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
            <div className="sub_heading--list">
                <h3>{data.quoteAuthor}</h3>
                <button className="refresh" type="button">Random <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="blue" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></button>
            </div>
            <ul>{newData.map((newDt) => (
                <li key={newDt.id}><p>"{newDt.quoteText}"</p></li>
            ))}</ul>
            <Link to={"/"}><button className="button_homepage">GO BACK TO HOMEPAGE →</button></Link>
        </div>
    )
}
