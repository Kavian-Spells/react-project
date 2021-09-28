import express from 'express';
import data from './data';
import cors from 'cors';

const app = express();

app.use(cors()); // Needed cors in order to call localhost:5000 on frontend

app.get('/listen', (req, res) => {
    res.send(`<h1>I am here listening!</h1>`)
})


app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    
    if(product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." });
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

