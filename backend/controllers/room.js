

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
    const roomdata = await Room.findOne({ roomID: req.body.roomID })
    if (!roomdata) {
        // creating sale
        let room = await Room.create({
            building: req.body.building,
            floor: req.body.floor,
            roomID: req.body.roomID
        });
        sendResponse(res, "success", 200, "Room Created", room);

    } else {
        sendResponse(res, "failure", 400, "Room Already Exist ");
    }
}
// get all rooms
const getRoom = async (req, res) => {

    const allrooms = await Room.find({});
    sendResponse(res, "success", 200, "Got All Rooms ", allrooms);
}
const getRoomByID = async (req, res) => {
    const room = await Room.findById(req.body.id);
    if (!room) {
        return sendResponse(res, "failure", 404, "Room Not Found");
    }
    sendResponse(res, "success", 200, "Got Room", room);
   
}





module.exports = { createRoom, getRoom,getRoomByID };