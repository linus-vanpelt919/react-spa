import React from "react";
import ReactDOM from "react-dom";

function Example() {
    const title = "これはタイトルです";
    const text = "これは本文です";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{title}</div>
                        <div className="card-body">{text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
