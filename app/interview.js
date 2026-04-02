import { View, TextInput, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { startInterview, nextQuestion } from "../services/api";
import Card from "../components/Card";
import CustomButton from "../components/Button";

export default function Interview() {
  const { role, experience, jobDesc } = useLocalSearchParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const data = await startInterview({ role, experience, jobDesc });

    setMessages([
      { role: "assistant", content: data.choices[0].message.content }
    ]);
  };

  const send = async () => {
    const updated = [...messages, { role: "user", content: input }];
    setMessages(updated);

    const data = await nextQuestion(updated);

    setMessages([
      ...updated,
      { role: "assistant", content: data.choices[0].message.content }
    ]);

    setInput("");
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        {messages.map((m, i) => (
          <Card key={i} text={`${m.role}: ${m.content}`} />
        ))}
      </ScrollView>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Your answer..."
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 10
        }}
      />

      <CustomButton title="Send" onPress={send} />
      <CustomButton
        title="Finish Interview"
        onPress={() =>
          router.push({
            pathname: "/result",
            params: { transcript: JSON.stringify(messages) }
          })
        }
      />
    </View>
  );
}