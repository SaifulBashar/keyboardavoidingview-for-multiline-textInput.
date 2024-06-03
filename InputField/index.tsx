import React from "react";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

export default function InputField({
  label,
  inputProps,
  containerStyle,
}: {
  label: string;
  inputProps?: React.ComponentProps<typeof TextInput>;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  const [focused, setFocused] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(true);

  return (
    <View style={containerStyle}>
      <Text style={{ marginBottom: 8 }}>{label}</Text>
      <View
        style={{
          borderWidth: focused ? 2 : 1,
          borderColor: focused ? "white" : "grey",
          borderRadius: 8,
          maxHeight: 200,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          {...inputProps}
          scrollEnabled={scrolled}
          onFocus={(e) => {
            if (inputProps && inputProps.onFocus) {
              inputProps.onFocus(e);
            }
            setFocused(true);
            setScrolled(false);
            setTimeout(() => {
              setScrolled(true);
            }, 1000);
          }}
          onBlur={(e) => {
            if (inputProps && inputProps.onBlur) {
              inputProps.onBlur(e);
            }
            setFocused(false);
            setScrolled(true);
          }}
          style={{
            padding: 16,
            flex: 1,
            margin: 0,
            minHeight: inputProps?.multiline ? 100 : "auto",
          }}
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
}
