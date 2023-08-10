const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: string
})
const Category = mongoose.model('Category' , categorySchema) // Category will bind with categories collection
module.exports = Category