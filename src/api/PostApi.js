import axiosInstance from "./axiosInstance ";

export const PostUserName = async ({ _id }) => {
  const response = await axiosInstance.post("users/getUserDetailsById", {
    userId: _id,
  });
  return response.data;
};
export const profileDetails = async () => {
  const response = await axiosInstance.post("users/getUserDetailsById");
  return response.data;
};
export const userStatus = async () => {
  const response = await axiosInstance.post("users/userStatusChangeById");
  return response.data;
};
