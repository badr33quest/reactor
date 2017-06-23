import express from "express";

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/employees", (req, res) => {
    res.send([
        { id: 1, name: 'John Smith' },
        { id: 2, name: 'Donald Duck' }
    ]);
});

export default app;
