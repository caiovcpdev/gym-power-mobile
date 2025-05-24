import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  '(tabs)/HomeScreen': undefined;
  '(tabs)/RegisterScreen': undefined;
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    console.log('Login attempt with:', email, password);
    navigation.navigate('(tabs)/HomeScreen');
  };

  const handleRegister = () => {
    console.log('Entrando Tela de Registro');
    navigation.navigate('(tabs)/RegisterScreen');
  };

  return (
    <View style={styles.container}>
      {/* Logo/Title */}
      <Text style={styles.title}>GYMPOWER</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="usuário"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="senha"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      {/* Lorem Ipsum Text */}
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Text>

      {/* Register Button */}
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>+ Novo usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526', // Dark background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFC107', // Yellow color for the title
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2A3435', // Darker input background
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#FFF', // White text color
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FFC107', // Yellow button background
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loremText: {
    color: '#888', // Grayish text color
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  registerText: {
    color: '#FFC107', // Yellow color for the register text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;