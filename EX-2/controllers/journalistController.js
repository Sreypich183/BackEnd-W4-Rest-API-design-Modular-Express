import { journalists } from "../models/data.js";

const getAllJournalists = (req, res) => {
    res.status(200).json({
        status: "success",
        results: journalists.length,
        data: {
            journalists
        }
    });
}
const getJournalistById = (req, res) => {
    const journalist = journalists.find(journalist => journalist.id === parseInt(req.params.id));

    if (!journalist) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }
    res.status(200).json({
        status: "success",
        data: { journalist }
    });
}
const createJournalist = (req, res) => {
    const newJournalist = {
        id: journalists.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    journalists.push(newJournalist);
    res.status(201).json({
        status: "success",
        data: { journalist: newJournalist }
    });
}

const updateJournalist = (req, res) => {
    const journalistId = journalists.find(journalist => journalist.id === parseInt(req.params.id));
    if (!journalistId) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }
    const updatedJournalist = {
        ...journalistId,
        name: req.body.name,
        email: req.body.email
    };
    journalists[journalists.indexOf(journalistId)] = updatedJournalist;
    res.status(200).json({
        status: "success",
        data: { journalist: updatedJournalist }
    });
}

const deleteJournalist = (req, res) => {
    const journalistId = journalists.find(journalist => journalist.id === parseInt(req.params.id));
    if (!journalistId) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }
    journalists.splice(journalists.indexOf(journalistId), 1);
    res.status(204).json({
        status: "success",
        data: null
    });
}

export {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist
}   
