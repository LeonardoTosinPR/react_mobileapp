import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const verifyPassword= (): boolean => {
  useEffect(() => {
    if ((password == confirmPw) && password.length || confirmPw.length > 6){
        return () => {false}; 
    } return () => {true};
  }, [password, confirmPw]);
    
    }
  return (
    <View>
      <Text>reset de senha: </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="nova senha"
      />
      <TextInput
        style={styles.input}
        value={confirmPw}
        onChangeText={setConfirmPw}
        placeholder="cofirme nova senha"
        secureTextEntry
      />
      <Button title="redefinir senha" 
        disabled={verifyPassword}
        onPress={Alert.alert('senha redefinida')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 1,
    margin: 1,
    flex: 1,
    backgroundColor: "#C7C5C5",
    alignItems: "center",
    justifyContent: "center",
  },
});
