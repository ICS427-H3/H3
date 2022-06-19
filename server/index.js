const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Password123',
    database: 'StickerEcommerce',
});

app.post('/CreateSticker', (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    db.query("CALL `Insert_StickersTbl_Proc`(?, ?, ?, ?);",
    [name, description, price, image],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("values inserted")
        }
    });
});

app.post('/Signup', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.address;
    const zipcode = req.body.zipcode;
    const state = req.body.state;

    db.query("CALL `Insert_UserInfo_Proc`(?, ?, ?, ?, ?, ?);",
        [name, email, password, address, zipcode, state],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        });
});

app.post('/Signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("CALL `Security_CheckLogin_Proc`(?, ?);",
        [email, password],
        (err, result) => {
            console.log(result);
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        });
});

app.get('/Shop', (req, res) => {
    db.query("CALL `View_AllStickers_Proc`;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
})