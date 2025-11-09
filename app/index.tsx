import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
//import { Button } from "@react-navigation/elements";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    <Text style={{ fontSize: 22, marginBottom: 20 }}>Welcome to Attendance App</Text>

      {/* Go to the login page */}
      <Link href="/(loginUI)/login" asChild>
      <Button title="Go to Login " />
      </Link>
    </View>

    
  );
}
