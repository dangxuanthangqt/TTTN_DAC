import axiosService from "../axios/axiosService";

export const loginApi = (data) => {
  return axiosService.post("/api/authen/login", data);
};
export const registerApi = (data) => {
  return axiosService.post("/api/authen/register", data);
};
