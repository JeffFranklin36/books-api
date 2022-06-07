const router = require('express').Router()
const Book = require('../models/book')

//Get all books
router.get('/', async (req, res) => {
try {
 const books = await Book.find()
 res.json(books)
} catch (error) {
 console.log(error)
 res.json({'message' : 'Error'})
}
})

//Get Book by ID
router.get('/:id', async (req, res) => {
 try {
  const book = await Book.findById(req.params.id)
  res.json(book)
 } catch (error) {
  console.log(error)
  res.json({'message' : 'Error'})
 }
})

//Update book
router.put('/:id', async (req, res) => {
try {
 await Book.findByIdAndUpdate(req.params.id, req.body)
 res.redirect('/books')
} catch (error) {
 console.log(error)
 res.json({'message' : 'Error'})
}
})

//Delete book
router.delete('/:id', async (req, res) => {
try {
 await Book.findByIdAndDelete(req.params.id)
 res.redirect('/books')
} catch (error) {
 console.log(error)
 res.json({'message' : 'Error'})
}
})

//Add book
router.post('/', async (req, res) => {
try {
await Book.create(req.body)
res.redirect('/books')
} catch (error) {
 console.log(error)
 res.json({'message' : 'Error'})
}
})

module.exports = router