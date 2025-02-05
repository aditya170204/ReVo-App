import axiosInstance from "./axiosInstance ";

export const PostUserName = async ({ userId }) => {
  const response = await axiosInstance.post("users/getUserDetailsById", {
    userId,
  });
  return response.data;
};
