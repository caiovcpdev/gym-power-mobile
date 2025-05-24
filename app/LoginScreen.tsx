import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if(!trimmedEmail || !trimmedPassword){
      Alert.alert(
        'Erro',
        'Por favor, preencha ambos os campos de usuário e senha.',
        [{ text: 'OK' }]
      )
      return
    }

    // Validation for admin credentials
    if (trimmedEmail === 'admin' && trimmedPassword === '123456') {
      console.log('Login bem-sucedido com:', trimmedEmail, trimmedPassword);
      router.push('/(tabs)/HomeScreen');
    } else {
      Alert.alert(
        'Erro',
        'Credenciais inválidas.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleRegister = () => {
    console.log('Entrando Tela de Registro');
    router.push('/RegisterScreen'); // está na raiz de app/
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GYMPOWER</Text>
      <TextInput
        style={styles.input}
        placeholder="usuário"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>+ Novo usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2A3435',
    borderRadius: 5,
    paddingHorizontal: 15,
    color: '#FFF',
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FFC107',
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
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  registerText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
