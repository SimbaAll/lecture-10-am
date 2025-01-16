import joi from "joi";
import DBConnection from "../connection.js";
import { ObjectId } from "mongodb";
import Model from "../Model/homeModel.js";

const homeController = {
    async insert(req, res, next) {
        const { name, email, pass, city, hobby } = req.body

        const result = new Model({
            name,
            email,
            pass,
            city,
            hobby
        })

        const insert = await result.save()

        res.send(insert)
    },
    async get(req, res) {
        const result = await Model.find().select('-createdAt -updatedAt -__v -_id').sort({ name: -1 })
        res.send(result)
    },
    async update(req, res, next) {

        const { name, email, pass, city } = req.body

        const result = await Model.findByIdAndUpdate({ _id: req.params.id }, { name, email, pass, city })

        res.send(result)
    },
    async delete(req, res) {
        const deleteData = await Model.findByIdAndDelete({ _id: req.params.id })

        res.send(deleteData)
    }
}

export default homeController