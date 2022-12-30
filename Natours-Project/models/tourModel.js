const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    requierd: [true, 'A tour must have a name!'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    requierd: [true, 'A tour must have a price!'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
