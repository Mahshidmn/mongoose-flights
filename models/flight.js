const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;



const destinationSchema = new Schema ({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date,
}, {
  timestamps: true
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
      const currentYear = new Date().getFullYear();
      return currentYear + 1;
    },
  },
  destinations: [destinationSchema],
  
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);


