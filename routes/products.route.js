var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = require('../models/index.model');

/* GET Tour page. */
router.get('/', async function (req, res, next) {
  var tours = await db.tours.find();
  const doccument = {
    title: 'Danh sách tours',
    docs: tours.map(doc => {
      return {
        _id: doc._id,
        nameTour: doc.nameTour,
        price: doc.price,
        image: doc.image,
      }
    }),
  }
  res.render('tourInCountry', doccument);
});

/* GET Tour Detail page. */
router.get('/:tourId', async function (req, res, next) {
  var doc = await db.tours.findById(req.params.tourId);
  console.log(doc);
  res.render('productDetail', { title: 'Express', doc: doc });
});

/* GET Pay for Tour Detail page. */
router.get('/pay/:tourId', async function (req, res, next) {
  var doc = await db.tours.findById(req.params.tourId);
  console.log(doc);
  res.render('payforTour', { title: 'Express', doc: doc });
});





module.exports = router;
