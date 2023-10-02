const { Router } = require('express');

const router = Router();

const fact = (n) => (n > 1) ? n * fact(n - 1) : 1;

router.get('/factorial', (req, res) => res.redirect(`http://localhost:3000/factorial/${req.query.number}`));
router.get('/factorial/:number', (req, res) => res.send(`${fact(req.params.number)}`));

module.exports = router;