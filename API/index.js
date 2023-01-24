const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbo = require("./db/db");
const { ObjectId } = require("mongodb");
const app = express();
const port = 4444;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
const jsonParser = bodyParser.json();

dbo.connectToServer();

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

// #region User

app.get('/user/list', (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('user')
        .find({}) // Return all
        .toArray((err, result) => {
            if (err) {
                res.status(400).send("Error fetching users!");
            } else {
                res.status(200).json(result);
            }
        });
});

app.post('/user/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('user')
        .insertOne( { ...req.body })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new user'});
        });
});

app.post('/user/update', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('user')
        .updateOne(
            { id: { $eq: req.body.id } },
            {
                $set: { ...req.body.updates },
                $currentDate: { lastModified: true }
            }
        )
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not update the user'});
        });
});

app.delete('/user/delete', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('user')
        .deleteOne( { id: { $eq: req.body.id } } )
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not delete the user'})
        });
});

// #endregion

// #region News

app.get('/news/list', (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('news')
        .find({}) // Return all
        .toArray((err, result) => {
            if (err) {
                res.status(400).send("Error fetching news!");
            } else {
                res.status(200).json(result);
            }
        });
});

app.post('/news/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('news')
        .insertOne( { ...req.body })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a news'});
        });
});

app.post('/news/update', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('news')
        .updateOne(
            { _id: { $eq: ObjectId(req.body._id) } },
            {
                $set: { ...req.body.updates },
                $currentDate: { lastModified: true }
            }
        )
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not update the news'});
        });
});

app.delete('/news/delete', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('news')
        .deleteOne( { _id: { $eq: ObjectId(req.body._id) } } )
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not delete the news'})
        });
});

// #endregion

// #region Newsletter

app.get('/newsletter/list', (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('newsletter')
        .find({}) // Return all
        .toArray((err, result) => {
            if (err) {
                res.status(400).send("Error fetching newsletters!");
            } else {
                res.status(200).json(result);
            }
        });
});

app.post('/newsletter/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('newsletter')
        .insertOne( { ...req.body })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new newsletter'});
        });
});

app.delete('/newsletter/delete', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('newsletter')
        .deleteOne( { id: { $eq: req.body.id } } )
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not delete the newsletter'})
        });
});

// #endregion

// #region Reservation

app.get('/reservation/list', (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('reservation')
        .find({}) // Return all
        .toArray((err, result) => {
            if (err) {
                res.status(400).send("Error fetching reservations!");
            } else {
                res.status(200).json(result);
            }
        });
});

app.post('/reservation/insert', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('reservation')
        .insertOne( { ...req.body })
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new reservation'});
        });
});

app.delete('/reservation/delete', jsonParser, (req, res) => {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('reservation')
        .deleteOne( { _id: { $eq: ObjectId(req.body._id) } } )
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not delete the reservation'})
        });
});

// #endregion