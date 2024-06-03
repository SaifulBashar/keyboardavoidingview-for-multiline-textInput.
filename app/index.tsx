import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import InputField from "../InputField";

export default function HomeScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          backgroundColor: "black",
          flex: 1,
        }}
      >
        <InputField
          label="Email"
          inputProps={{ placeholder: "Email", multiline: true }}
        />
        <View style={{ height: 20 }} />
        <InputField
          label="Country"
          inputProps={{ placeholder: "Country", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="Phone"
          inputProps={{ placeholder: "Phone", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="Flat"
          inputProps={{ placeholder: "Flat", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="Address"
          inputProps={{ placeholder: "Address", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="phone"
          inputProps={{ placeholder: "phone", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="Color"
          inputProps={{ placeholder: "Color", multiline: true }}
        />
        <View style={{ height: 20 }} />

        <InputField
          label="Gender"
          inputProps={{ placeholder: "Gender", multiline: true }}
        />
        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
