/* import { Text, View, Button } from "react-native";
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

      
      <Link href="/(loginUI)/login" asChild>
      <Button title="Go to Login " />
      </Link>
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Attendance App</Text>

      <Link href="/login" asChild>
        <Button title="Login" />
      </Link>

      <View style={{ marginTop: 10 }}>
        <Link href="/register" asChild>
          <Button title="Register" />
        </Link>
      </View>
    </View>

    

    
  );
}
 */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function LandingScreen() {
  return (
    <LinearGradient colors={["#d4fc79", "#e01c1cff", "#84fab0", "#8fd3f4"]} style={styles.container}>
      <View style={styles.glassCard}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/747/747376.png" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subtitle}>
          Welcome to your Attendance App — the easiest way to track attendance.
        </Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/login")}>
          <LinearGradient
            colors={["#8E2DE2", "#4A00E0"]}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={() => router.push("/register")}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  glassCard: {
    width: "85%",
    padding: 30,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(15px)",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    marginBottom: 30,
  },
  loginButton: {
    width: "100%",
    borderRadius: 30,
    marginBottom: 15,
    overflow: "hidden",
  },
  buttonGradient: {
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontWeight: "600",
  },
});
