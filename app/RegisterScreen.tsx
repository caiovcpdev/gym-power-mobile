import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    // Trim inputs to remove leading/trailing whitespace
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Validation for empty fields
    if (!trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      Alert.alert(
        'Erro',
        'Por favor, preencha todos os campos: usuário, senha e confirmação de senha.',
        [{ text: 'OK' }]
      );
      return;
    }

    // Validation for password match
    if (trimmedPassword !== trimmedConfirmPassword) {
      Alert.alert(
        'Erro',
        'As senhas não coincidem. Por favor, verifique a senha e a confirmação de senha.',
        [{ text: 'OK' }]
      );
      return;
    }

    // Validation for gender (uncomment when Picker is enabled)
    /*
    if (!gender) {
      Alert.alert(
        'Erro',
        'Por favor, selecione um gênero.',
        [{ text: 'OK' }]
      );
      return;
    }
    */

    // If all validations pass
    console.log('Register attempt with:', trimmedEmail, trimmedPassword, trimmedConfirmPassword, gender);
    router.push('/(tabs)/HomeScreen');
  };

  const handleBack = () => {
    console.log('Navigating back to LoginScreen');
    router.push('./LoginScreen');
  };

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#1C2526');
      StatusBar.setTranslucent(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
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

        <TextInput
          style={styles.input}
          placeholder="confirmação senha"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Gênero (comentado por enquanto)
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(itemValue) => setGender(itemValue)}
            dropdownIconColor="#888"
          >
            <Picker.Item label="Sexo (Selecione)" value="" enabled={false} />
            <Picker.Item label="Masculino" value="male" />
            <Picker.Item label="Feminino" value="female" />
            <Picker.Item label="Outro" value="other" />
          </Picker>
        </View>
        */}

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>

        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C2526',
  },
  container: {
    flex: 1,
    backgroundColor: 'c',
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
    marginBottom: 20,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#2A3435',
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#FFF',
  },
  registerButton: {
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
  backText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;