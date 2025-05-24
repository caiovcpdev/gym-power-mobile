import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  '(tabs)/HomeScreen': undefined;
  '(tabs)/LoginScreen': undefined;
};

const UserScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    
  // Dados fictícios para a lista de usuários
  const userData = [
    {
      id: '1',
      name: 'Daniel Vieira',
      checkIn: '08:15',
      checkOut: '09:45',
    },
  ];

  const renderItem = ({ item } :  any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.historyText}>Histórico de acessos</Text>
      <Text style={styles.timeText}>Check-in {item.checkIn}</Text>
      <Text style={styles.timeText}>Check-out {item.checkOut}</Text>
    </View>
  );

  const handleSearch = () => {
    console.log('Busca por usuário iniciada');
    // Adicione lógica de busca aqui
  };

  const handleHome = () => {
    navigation.navigate('(tabs)/HomeScreen');
    console.log('Navegação para Início');
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Usuários</Text>

      {/* Botão de Busca */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>🔍 BUSCAR POR USUÁRIO</Text>
      </TouchableOpacity>

      {/* Lista de Usuários */}
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Botão Início */}
      <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
        <Text style={styles.homeText}>⭕ Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchButton: {
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
  list: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#2A3435',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  nameText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyText: {
    color: '#888',
    fontSize: 14,
    marginTop: 5,
  },
  timeText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 5,
  },
  homeButton: {
    backgroundColor: '#2A3435',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  homeText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserScreen;