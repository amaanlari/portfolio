import axios from "axios";

import express from "express";

import cors from "cors";


const app = express();
app.use(cors());

app.get("/github-repo/{url}", async (_req: any, res: { send: (arg0: any) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
    _req.
    try {
        const response = await axios.get();
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});

app.listen(5000, () => console.log("Proxy server running on port 5000"));
