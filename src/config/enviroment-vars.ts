import { IEnviromentVars } from "../api/models/enviroment-vars";
import { config } from "dotenv";
import { AppMode } from "../common/enums";

config();

export const Enviroment: IEnviromentVars = {
  PORT: Number(process.env.PORT),
  HOST: process.env.HOST,
  APP_MODE: process.env.APP_MODE as AppMode,

  HTTP_PROXY: process.env.HTTP_PROXY,
  HTTPS_PROXY: process.env.HTTPS_PROXY,
  NO_PROXY: process.env.NO_PROXY,

  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',')
}