import { Router } from "express";
import { healthcheck } from "../controller/healthcheck.controller.js";


const healthcheckrouter = Router()

healthcheckrouter.route("/").get(healthcheck)
// healthcheckrouter.route("/test").get(healthcheck)

export default healthcheckrouter