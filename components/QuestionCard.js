import { View, Text } from "react-native";
import { COLORS } from "../constants/theme";

export default function Card({ text }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.card,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
      }}
    >
      <Text style={{ color: "#fff" }}>{text}</Text>
    </View>
  );
}