

const { Room } = require("../models");
const { validateRoom } = require("../models/room");
const { validationError, sendResponse } = require("../utils");

// add new room only admin can do this
const createRoom = async (req, res) => {
    // validating if there are correct details
    const { error } = validateRoom(req.body);

    if (error) {
        return sendResponse(res, "error", 422, validationError(error));
    }
    //finding room if exist
    const roomdata = await Room.findOne({ RoomID: req.body.RoomID })
    if (!roomdata) {
        // creating sale
        let room = await Room.create({
            Building: req.body.Building,
            Floor: req.body.Floor,
            RoomID: req.body.RoomID
        });
        sendResponse(res, "success", 200, "Room Created", room);
   
    } else {
        sendResponse(res, "failure", 400, "Room Already Exist ");
    }
}






module.exports = { createRoom };