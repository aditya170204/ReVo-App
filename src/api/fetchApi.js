import axiosInstance from "./axiosInstance ";

export const getUserList = async () => {
  const response = await axiosInstance.get("users");
  return response.data;
};
export const UserListing = async () => {
  const response = await axiosInstance.get(
    "users?page=1&status=pending&limit=10&search=&role=&startDateOfJoining=&endDateofJoining=&startDateOfCreated=&endDateOfCreated="
  );
  return response.data;
};
export const UserListingData = async () => {
  const response = await axiosInstance.get(
    "users?page=1&status=draft&limit=10&search=&role=&startDateOfJoining=&endDateofJoining=&startDateOfCreated=&endDateOfCreated="
  );
  return response.data;
};
