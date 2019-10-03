const { Router } = require('express');
const db = require('./data');

const router = Router();

router.route('/')
  .get((req, res) => {
    res.json(db);
  });

router.route('/:wineId')
  .get((req, res) => {
    const { params: { wineId } } = req;
    const wine = db.find((ele) => {
      return ele.id === wineId;
    });

    const { id, note } = wine;
    res.json({ id, note });
  });

module.exports = router;
