import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";

function Example() {
    const title = "React導入";
    const text = "これは本文です";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{title}</div>
                        <div className="card-body">{text}</div>
                        <Button color="secondary" variant="contained">Hello World</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("app")) {
    ReactDOM.render(<Example />, document.getElementById("app"));
}
