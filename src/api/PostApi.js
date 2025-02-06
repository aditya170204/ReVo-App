import axiosInstance from "./axiosInstance ";

export const PostUserName = async ({ _id }) => {
  const response = await axiosInstance.post("users/getUserDetailsById", {
    userId: _id,
  });
  return response.data;
};
