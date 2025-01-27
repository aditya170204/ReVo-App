import { View, Text } from "react-native";
import React from "react";
import ProfileDetailSection from "./ProfileDetailSection";
import UserDetail from "./UserDetail";

const InfoCard = () => {
  return (
    <View>
      <ProfileDetailSection sectionTitle={"PERSONAL INFORMATION"} />
      <UserDetail title={"Name"} value={"Aditya"} />
      <UserDetail title={"Role"} value={"in danger"} />
      <UserDetail title={"Email"} value={"Aditya@gmail"} />
      <UserDetail title={"Mobile number"} value={"97929899"} />
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
