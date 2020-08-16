import React from "react";
import { Text, Platform } from "react-native";

import defaultStyles from "../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
