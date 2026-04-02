import { TouchableOpacity, Text } from "react-native";
import { COLORS } from "../constants/theme";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.primary,
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
}