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

    return (
        <div className="container">
            <Router>
				<Switch>
                    <Route path="/authors/:authorName">
						<NewLists data={data} />
					</Route>
					<Route path="/">
                        <Text data={data} useData={setData} FetchingData={FetchingData} />
					</Route>
				</Switch>
			</Router>
            <footer>
                <p>Your name @ DevChallenges.io</p>
            </footer>
        </div>
    )
}
