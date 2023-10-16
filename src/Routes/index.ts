import { Router } from "express";

import { genreRoutes } from "./genres.routes";
import { movieRoutes } from "./movies.routes";

const router = Router();

router.use("/genre", genreRoutes);
router.use("/movie", movieRoutes);

export { router };