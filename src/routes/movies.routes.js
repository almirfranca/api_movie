const { Router } = require("express");
const MoviesController = require("../controllers/MoviesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const moviesRoutes = Router();

const moviesController = new MoviesController();

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.post("/", moviesController.create);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.get("/", moviesController.index);
moviesRoutes.delete("/:id", moviesController.delete);

module.exports = moviesRoutes;
