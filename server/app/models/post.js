var mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Days: {
        type: Array,
        required: false
    },
    TitleVal: {
        type: String,
        required: false,
    },
    DiscriptionVal: {
        type: String,
        required: false
    },
    classType: {
        type: String,
        required: false
    },
    Recurring_status: {
        type: String,
        required: false
    },
    feeVal: {
        type: Number,
        required: false
    },
    SubjectVal: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: false
    },
    EndTime: {
        type: String,
        required: false
    }
})



// Days: [],
// TitleVal: "",
// DiscriptionVal: "",
// classType: "",
// Recurring_status: "",
// howManyDays: "",
// feeVal: "",
// SubjectVal: "",
// startTime: null,
// EndTime: null,


module.exports = mongoose.model("Post", postSchema)
