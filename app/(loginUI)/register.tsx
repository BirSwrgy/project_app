// app/register.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Link, router } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // Default role

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    Alert.alert("Success", `Registered as ${role}!`);
    router.push("/login"); // Go back to login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Simple role toggle */}
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === "student" && styles.activeRole]}
          onPress={() => setRole("student")}
        >
          <Text style={styles.roleText}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, role === "teacher" && styles.activeRole]}
          onPress={() => setRole("teacher")}
        >
          <Text style={styles.roleText}>Teacher</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Link href="/login" style={styles.link}>
        Already have an account? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 40 },
  input: { width: "100%", backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: "#ccc" },
  button: { width: "100%", backgroundColor: "#28a745", padding: 12, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  roleContainer: { flexDirection: "row", marginBottom: 20 },
  roleButton: { padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginHorizontal: 5 },
  activeRole: { backgroundColor: "#007bff" },
  roleText: { color: "#000" },
  link: { marginTop: 20, color: "#007bff" },
});
