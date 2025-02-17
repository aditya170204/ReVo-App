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
export const getTeamList = async () => {
  const response = await axiosInstance.get(
    "team?page=2&search=&managerArrFilter=[]&teamLeadArrFilter=[]&startDateCreated=&endDateCreated=&startTeamSize=&endTeamSize="
  );
  return response.data;
};
export const getTeamDetails = async ({ _id }) => {
  const response = await axiosInstance.get(
    "team?page=1&search=&managerArrFilter=[]&teamLeadArrFilter=[]&startDateCreated=&endDateCreated=&startTeamSize=&endTeamSize=s",
    {
      userId: _id,
    }
  );
  return response.data;
};
export const attendanceList = async ({ _id }) => {
  const response = await axiosInstance.get(
    "attendance?page=1&status=present&limit=10&search=&start=&end=&agentArrFilter=[]",
    {
      userId: _id,
    }
  );
  return response.data;
};
export const leaveList = async ({ _id }) => {
  const response = await axiosInstance.get(
    "leave?page=1&status=new&limit=10&search=&employeeNameArr=[]&endLeaveDate=",
    {
      userId: _id,
    }
  );
  return response.data;
};
export const myLeaveList = async ({ _id }) => {
  const response = await axiosInstance.get(
    "leave?page=1&status=new&limit=10&search=&userId=668e6a8d30945ec9f66e038c",
    {
      userId: _id,
    }
  );
  return response.data;
};
