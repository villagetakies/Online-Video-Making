const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema
const DashboardSchema = new Schema({
    "timeline": {
        "type": "object",
        "soundtrack": {
            "type": "object",
            "src": {"type": "string"},
            "effect": {"type": "string"},
            "volume": {"type": "number"}
        },
        "background": {"type": "string"},
        "fonts": {"type": "array"},
        "tracks": {
            "type": "array"
        }
    },
    "output": {
        type: Object,
        "format": {"type": "string"},
        "resolution": {"type": "string"},
        "aspectRatio": {"type": "string"},
        "scaleTo": {"type": "string"},
        "poster": {
            "capture": {"type": "number"}
        },
        "thumbnail": {
            "capture": {"type": "number"},
            "scale": {"type": "number"}
        }
    }
});

module.exports = Dashboard = mongoose.model('dashboard', DashboardSchema);