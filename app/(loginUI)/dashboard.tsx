// app/dashboard.tsx
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Dashboard 🎉</Text>
      <Button title="Logout" onPress={() => router.push("/login")} />
    </View>
  );
}
