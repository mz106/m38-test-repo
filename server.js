const express = require(express);

const app = express();

app.use(process.env.PORT, ()=> {
    console.log(`Server is listening on port ${process.env.PORT}`);
});