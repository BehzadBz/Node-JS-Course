const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    requierd: [true, 'A tour must have a name!'],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    requierd: [true, 'A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    requierd: [true, 'A tour must have a Group size']
  },
  difficulty: {
    type: String,
    requierd: [true, 'A tour must have a difficulty']
  },
  ratingAverege: {
    type: Number,
    default: 4.5
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    requierd: [true, 'A tour must have a price!']
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    requierd: [true, 'A tour must have a description']
  },
  imageCover: {
    type: String,
    requierd: [true, 'A tour must have a cover image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
