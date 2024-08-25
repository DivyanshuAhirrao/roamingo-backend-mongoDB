const mongoose = require('mongoose');
const { Schema } = mongoose;

const busSchema = new Schema({}, { strict: false });

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
