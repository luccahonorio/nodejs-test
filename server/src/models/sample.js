const mongoose = require('mongoose');

module.exports.Sample = mongoose.model('Sample', { 
    name: String
});