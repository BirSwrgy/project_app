import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="(loginUI)/login" options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="(loginUI)/register" options={{ title: "Register", headerShown: false }} />
      <Stack.Screen name="(loginUI)/dashboard" options={{ title: "Dashboard" }} />
    </Stack>
  );
}
