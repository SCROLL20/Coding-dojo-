const JokeController = require("../controllers/joke.controller")

module.exports =(app) => {
    app.post("/api/jokes", JokeController.createNewJoke)
    app.get("/api/jokes", JokeController.findalljokes)
    app.get("/api/jokes/:id", JokeController.findonesinglejokes)
    app.patch("/api/jokes/:id", JokeController.updateexistingjoke)
    app.delete("/api/jokes/:id",JokeController.deleteAnexitingjoke)
}