import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

//ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<Header />, document.getElementById("root"));
//ReactDOM.render(<Footer />, document.getElementById("root"));
/*
function Card(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            <p> {props.content} </p>
        </div>
    );
}
*/
ReactDOM.render(
    <div>
        <Header />
        <Footer />
        <App />
    </div>,
    document.getElementById("root")
);
