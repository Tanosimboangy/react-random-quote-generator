import React, {useState, useEffect} from "react";
// import { Link, useParams, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Text from "./Text.js";


export default function App() {
    const [data, setData] = useState([]);

    // const el = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    // const el = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10");

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
    console.log(data);
    return (
        <div className="container">
            <h1>Random Quotes Generator</h1>
            <div key={data.id}>
                <Text data={data} useData={setData} handleClick={handleClick} />
            </div>
            {/* <Router>
				<Switch>
					<Route>
                        <Link to="/new">
                            <NewList />
                        </Link>
					</Route>
					<Route path="/">
						<MoviesList />
					</Route>
				</Switch>
			</Router> */}
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