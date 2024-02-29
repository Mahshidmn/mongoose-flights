const Flight = require('../models/flight');

const create = async (req, res) => {
    // find the movie
    const flight = await Flight.findById(req.params.id);
    //creat to the review
    flight.destinations.push(req.body);
    //save the changes
    try {
        await flight.save(); // because this line could throw an error
        // if the data is invalid , the server can crash , so we should handle that error
        //redirect back to this movie
    } catch (err) {
        console.log(err); // TODO: tell the user what went wromng and how to fix it
    }
    // all the below lines are the same
    res.redirect(`/flights/${flight._id}`);
   // res.redirect('/flights' + flight._id);
   // res.redirect('/flights' + req.params.id);
};

module.exports = {
 create
};