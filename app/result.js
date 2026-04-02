import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getFeedback } from "../services/api";

export default function Result() {
  const { transcript } = useLocalSearchParams();
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const data = await getFeedback(transcript);
    setFeedback(data.choices[0].message.content);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Interview Feedback
      </Text>
      <Text style={{ marginTop: 10 }}>{feedback}</Text>
    </ScrollView>
  );
}