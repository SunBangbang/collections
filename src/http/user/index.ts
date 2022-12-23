import { get,post } from "../../http/api.ts";

export const doAbouts = () => post("/data/api.data/aboutUs");