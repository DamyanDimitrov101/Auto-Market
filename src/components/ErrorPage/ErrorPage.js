import { Link } from "react-router-dom";

import './ErrorPage.css';

function ErrorPage() {
    return (
        <main className="Main-ErrorPage">
            <div className="ErrorPage">
                <h1>Error! Page not found.. :(</h1>

                <Link to="/">
                    Go back to Home page.
                </Link>
            </div>
        </main>
    );
}

export default ErrorPage;
