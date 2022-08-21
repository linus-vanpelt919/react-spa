import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from "@mui/material";

function Home() {
    return (
        <div className="container">
            sss
            <Card>
                <Button color="primary" variant="contained" href={`/example`}>Exampleに遷移</Button>
            </Card>
        </div>
    );
}

export default Home;
