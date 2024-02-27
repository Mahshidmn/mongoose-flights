const Flight = require('../models/flight');

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights});
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }

  // TODO: check why its not working
//   function newFlight(req, res) {
//   const newFl = new Flight();
//   // Obtain the default date
//   const dt = newFl.departs;
//   // Format the date for the value attribute of the input
//   let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
//   departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
//   res.render('flights/new', { departsDate }, { title: 'Add Flight', errorMsg: '' });
//   }
function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
  }

  async function create(req, res) {
    
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }

module.exports = {
    index,
    show,
    new: newFlight,
    create
  };