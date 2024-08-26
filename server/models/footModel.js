const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const footSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timings: {
        type: [String],
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const Foot = mongoose.model("Foot", footSchema);
module.exports = Foot;
