import React from "react";

import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className="Main-ErrorPage">
                    <div className="ErrorPage">
                        <h1>Error! Something went wrong... :(</h1>

                        <Link to="/">
                            Go back to Home page.
                        </Link>
                    </div>
                </main>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;