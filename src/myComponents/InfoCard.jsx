import { View, Text } from "react-native";
import React from "react";
import ProfileDetailSection from "./ProfileDetailSection";
import UserDetail from "./UserDetail";
import { useQuery } from "react-query";
import { profileDetails } from "../api/PostApi";
// import { profileDetails } from "../api/fetchApi";

const InfoCard = () => {
  const {
    data: getUserDetailsById,
    error,
    isLoading,
  } = useQuery({
    queryFn: () => {
      return profileDetails({ getUserDetailsById });
    },
    queryKey: ["getUserDetailsById", "getUserDetailsById"],
  });
  console.log("getUserDetailsById", getUserDetailsById?.data);
  return (
    <View>
      <ProfileDetailSection sectionTitle={"PERSONAL INFORMATION"} />
      <UserDetail title={"Name"} value={getUserDetailsById?.data?.name} />
      <UserDetail title={"Role"} value={getUserDetailsById?.data?.role} />
      <UserDetail title={"Email"} value={getUserDetailsById?.data?.email} />
      <UserDetail
        title={"Mobile number"}
        value={getUserDetailsById?.data?.mobile}
      />
      <ProfileDetailSection sectionTitle={"ADDRESS INFORMATION"} />
      <UserDetail title={"House/Flat Address"} value={"Aditya"} />
      <UserDetail title={"City"} value={"Aditya"} />
      <UserDetail title={"County"} value={"Aditya"} />
      <UserDetail title={"County"} value={"Aditya"} />
      <UserDetail title={"Post Code"} value={"Aditya"} />
      <ProfileDetailSection sectionTitle={"BANK INFORMATION"} />
      <UserDetail title={"Name of Bank"} value={"Aditya"} />
      <UserDetail title={"Name on Bank Ac."} value={"Aditya"} />
      <UserDetail title={"Account No."} value={"Aditya"} />
      <UserDetail title={"Sort Code"} value={"Aditya"} />
      <ProfileDetailSection sectionTitle={"SOCIAL MEDIA LINKS"} />
      <UserDetail
        title={"Facebook"}
        value={
          "Adityryftguvbhiiiiiiiiiikkygggggggggghkvyyygggggggggggggggggggggggggddddddddddddfghjmnbvcdrtyhjnbvfrtyujvderesrtfguihjiokma"
        }
      />
      <UserDetail
        title={"Instagram"}
        value={
          "Adityryftguvbhiiiiiiiiiikkygggggggggghkvyyygggggggggggggggggggggggggddddddddddddfghjmnbvcdrtyhjnbvfrtyujvderesrtfguihjiokma"
        }
      />
      <UserDetail
        title={"YouTube"}
        value={
          "Adityryftguvbhiiiiiiiiiikkygggggggggghkvyyygggggggggggggggggggggggggddddddddddddfghjmnbvcdrtyhjnbvfrtyujvderesrtfguihjiokma"
        }
      />
      <UserDetail
        title={"Tiktok"}
        value={
          "Adityryftguvbhiiiiiiiiiikkygggggggggghkvyyygggggggggggggggggggggggggddddddddddddfghjmnbvcdrtyhjnbvfrtyujvderesrtfguihjiokma"
        }
      />
      <ProfileDetailSection sectionTitle={"MESSAGING CHANNELS"} />
      <UserDetail
        title={"WhatsApp"}
        value={
          "Adityryftguvbhiiiiiiiiiikkygggggggggghkvyyygggggggggggggggggggggggggddddddddddddfghjmnbvcdrtyhjnbvfrtyujvderesrtfguihjiokma"
        }
      />
      <UserDetail
        title={"Telegram"}
        value={
          "Aditbefdddddddddreeeeeeeeeeeeeeeeeeeeeeefwsaaaaaaafrrrrrrrrrrrrrrrrrrrrrrrrrrrya"
        }
      />
    </View>
  );
};

export default InfoCard;
