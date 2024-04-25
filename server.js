const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.get async (req, res) => {
//     try {
//         const result = await
//         res.status(200).json(result)
//     } catch (err) {
//         res.status(500).send({ message: 'Internal Server Error' })
//     }
// }

// users

// app.get users/:id
// async (req, res) => {
//     try {
//         const result = await
//         res.status(200).json(result)
//     } catch (err) {
//         res.status(500).send({ message: 'Internal Server Error' })
//     }
// }

// app.post
// async (req, res) => {
//     try {
//         const result = await
//         res.status(200).json(result)
//     } catch (err) {
//         res.status(500).send({ message: 'Internal Server Error' })
//     }
// }

// app.put users/:id
// async (req, res) => {
//     try {
//         const result = await
//         res.status(200).json(result)

//     } catch (err) {
//         res.status(500).send({ message: 'Internal Server Error' })
//     }
// }

// app.delete user/:id
// async (req, res) => {
//     try {
//         const result = await
//         res.status(200).json(result)
//     } catch (err) {
//         res.status(500).send({ message: 'Internal Server Error' })
//     }
// }
