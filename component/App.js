import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NewLists from "./NewLists.js";
import Text from "./Text.js";

export default function App() {
    const [data, setData] = useState([]);
    
    async function FetchingData() {
        const  link = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
        const el = await fetch(link);
        const res = await el.json();
        setData(res.quote);
    }
    useEffect(() => {
        FetchingData();
    }, [])

    function handleClick(e) {
        e.preventDefault();
        FetchingData();
    }
    return (
        <div className="container">
            <header>
                <h1>Random Quotes Generator</h1>
                <button className="refresh" type="button" onClick={handleClick}>Random <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="blue" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg></button>
            </header>

            <Router>
				<Switch>
                    <Route path="/authors/:authorName">
						<NewLists />
					</Route>
					<Route path="/">
                        <Text data={data} useData={setData} handleClick={handleClick} />
					</Route>
				</Switch>
			</Router>
        </div>
    )
}
