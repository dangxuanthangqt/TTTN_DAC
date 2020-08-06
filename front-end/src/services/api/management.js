import axiosService from "../axios/axiosService";

export const ApiGetProfile = () => {
  return axiosService.get("/api/profile");
};
export const ApiUpdateProfile = (data) => {
  return axiosService.patch("/api/update-profile", data);
};
export const ApiCreateCampain = (data) => {
  return axiosService.post("/api/campaign", data);
};
export const ApiGetListCampaign = () => {
  return axiosService.get("/api/campaign");
};

export const ApiDeleteCampain = (id) => {
  return axiosService.delete("/api/campaign/" + id);
};
export const ApiEditCampaign = (id, data) => {
  return axiosService.patch("/api/campaign/" + id, data);
};
export const ApiCreateItem = (data) => {
  return axiosService.post("/api/items", data);
};
export const ApiGetItems = () => {
  return axiosService.get("/api/items");
};
export const ApiGetItemFollowCampaign = (id) => {
  return axiosService.get("/api/items/campaign/" + id);
};
export const ApiDeleteItemFollowId = (id) => {
  return axiosService.delete("/api/items/" + id);
};
export const ApiUpdateItem = (data) => {
  return axiosService.patch("/api/items", data);
};
export const ApiGetAllUser = () => {
  return axiosService.get("/api/admin");
};
export const ApiDeleteUser = (id) => {
  return axiosService.delete("/api/admin/users/" + id);
};
export const ApiChangeStatusUser = (id, data) => {
  return axiosService.patch("/api/admin/users/" + id, data);
};
