const express = require('express');
const router = express.Router();

const knexconfig = require('../knexfile');
const knex = require('knex')(knexconfig);
const gtfsdb = require('gtfsdb')(knex);

router.get('/agency', (req, res, next) => {
  gtfsdb
    .getAllAgencies()
    .then((agencies) => {
      res.send(agencies);
    })
    .catch(next);
});

router.get('/agency/:agency/route', (req, res, next) => {
  const agency_key = req.params.agency;
  gtfsdb.getRoutes(agency_key)
  .then((agencies) => {
    res.send(agencies);
  })
  .catch(next);
});

router.get('/agency/:agency/route/:routeId', (req, res) => {
  const agencyKey = req.params.agency;
  const routeId = req.params.routeId;

  gtfsdb.getRoute(agencyKey, routeId)
  .then((data) => {
    res.send(data);
  });
});

router.get('/agency/:agency/trip', (req, res, next) => {
  gtfsdb.getTrips(req.params.agency)
  .then((agencies) => {
    res.send(agencies);
  })
  .catch(next);
});

router.get('/agency/:agency/stop', (req, res, next) => {
  gtfsdb.getStops(req.params.agency)
  .then((stops) => {
    res.send(stops);
  })
  .catch(next);
});

module.exports = router;
