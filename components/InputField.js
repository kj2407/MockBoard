import { TextInput } from "react-native";
import { COLORS } from "../constants/theme";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      style={{
        backgroundColor: COLORS.card,
        color: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10
      }}
    />
  );
}