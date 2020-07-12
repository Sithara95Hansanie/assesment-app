'use strict';
const Patient = require('../patients/patients.model');
module.exports = {
    index: (req, res) => {
        Patient
            .find({})
            .exec((err, patientDetails) => {
                if (err) {
                    res.status(500).json({ message: err })
                } res.status(200).json({ message: "Patient Details fetched Successfully", data: patientDetails });
            })
    },
    retrieve: (req, res) => {
        const patientId = req.params.id;
        Patient
            .findOne({ _id: patientId })
            .exec((err, patientDetails) => {
                if (err) {
                    res.status(500).json({ message: err })
                }

                res.status(200).json({ message: "Patient Details fetched Successfully", data: patientDetails });
            })
    },
    create: (req, res) => {
        Patient.create(req.body, (err, patientDetails) => {
            if (err) {
                res.status(500).json({ message: err })
            } res.status(201).json({ message: "Patient Created Successfully", data: patientDetails });
        })
    },
    update: (req, res) => {
        const patientId = req.params.id;
        Patient.findByIdAndUpdate(patientId, { $set: req.body })
            .exec((err, patientDetails) => {
                if (err) res.status(500).json({ message: err })
                res.status(200).json({ message: "Patient updated" });
            })
    },
    delete: (req, res) => {
        const patientId = req.params.id;
        Patient
            .findByIdAndUpdate(patientId, { $set: { is_active: false } })
            .exec((err, patientDetails) => {
                if (err) res.status(500).json({ message: err })

                res.status(200).json({ message: "Patient Deleted" });
            })
    }
}