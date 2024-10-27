const Author = require('../models/author.model');

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find().sort({ name: 1 }) // sort alphabetically
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err));
    },
    getAuthorById: (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                if (author) res.json(author);
                else res.status(404).json({ message: "Author not found" });
            })
            .catch(err => res.status(400).json(err));
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => {
                if (updatedAuthor) res.json(updatedAuthor);
                else res.status(404).json({ message: "Author not found" });
            })
            .catch(err => res.status(400).json(err));
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.status(400).json(err));
    }
};
