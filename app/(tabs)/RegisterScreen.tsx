import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  '(tabs)/HomeScreen': undefined;
  '(tabs)/LoginScreen': undefined;
};

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState(''); // Initial value can stay empty
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegister = () => {
    console.log('Register attempt with:', email, password, confirmPassword, gender);
    navigation.navigate('(tabs)/HomeScreen');
  };

  const handleBack = () => {
    console.log('Navigating back to LoginScreen');
    navigation.navigate('(tabs)/LoginScreen');
  };

  // Hide or style the status bar
  useEffect(() => {
    StatusBar.setBarStyle('light-content'); // Set status bar text/icons to white for dark theme
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#1C2526'); // Match the background color of the screen
      StatusBar.setTranslucent(false); // Ensure status bar is not translucent
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>GYMPOWER</Text>

        {/* Username/Email Input */}
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

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="confirmação senha"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Gender Picker */}
        {/* <View style={styles.pickerContainer}>
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
        </View> */}

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        {/* Lorem Ipsum Text */}
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Text>

        {/* Back Button */}
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
    backgroundColor: '#1C2526', // Match the background color
  },
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
    color: '#FFF', // Changed to white for better contrast
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