import { View, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Setup() {
  const router = useRouter();

  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Role" onChangeText={setRole} />
      <TextInput placeholder="Experience" onChangeText={setExperience} />
      <TextInput placeholder="Job Description" onChangeText={setJobDesc} />

      <Button
        title="Start"
        onPress={() =>
          router.push({
            pathname: "/interview",
            params: { role, experience, jobDesc }
          })
        }
      />
    </View>
  );
}