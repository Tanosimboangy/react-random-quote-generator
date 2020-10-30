import React, {useState, useEffect} from "react";
import { Link, useParams, BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
            <h1>Random Quotes Generator</h1>
            <Router>
				<Switch>
					<Route>
                        <Text data={data} useData={setData} handleClick={handleClick} />
					</Route>
					<Route path="/">
						
					</Route>
				</Switch>
			</Router>
        </div>
    )
}



{/* <Router>
    <Switch>
        <Route path="/other">
            <OtherQuotes render= {
                function() {
            } />
        </Route>
        <Route path="/">
            <RandomQuote render={
            } />
        </Route>
    </Switch>
</Router> */}