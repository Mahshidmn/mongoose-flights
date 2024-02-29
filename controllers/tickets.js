const Flight = require('../models/flight');
const Ticket = require('../models/ticket');




async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({});
    res.render('tickets/new', { title: 'Add Ticket', flight, tickets });
  }
  
  const create = async (req, res) => {
    // find the movie
    const flight = await Flight.findById(req.params.id);
    //creat to the review
    
    
    try {
      // create a ticket using req.body based on Ticket model
       const ticket = await Ticket.create(req.body);
       ticket.flight = flight;
       //save the changes
        await ticket.save(); // because this line could throw an error
        // if the data is invalid , the server can crash , so we should handle that error
        //redirect back to this movie
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
        console.log(err); // TODO: tell the user what went wromng and how to fix it
    }
    // all the below lines are the same
   
   // res.redirect('/flights' + flight._id);
   // res.redirect('/flights' + req.params.id);
};




module.exports = {
    new: newTicket,
    create
  };
  