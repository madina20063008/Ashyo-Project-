import { API } from "@/hooks/getEnv";
import axios from "axios";

export const instance = () => axios.create({baseURL: API})