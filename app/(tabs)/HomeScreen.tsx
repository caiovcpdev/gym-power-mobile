import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  '(tabs)/HomeScreen': undefined;
  '(tabs)/LoginScreen': undefined;
  '(tabs)/UsersScreen': undefined;
};


const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Dados fictícios para a lista de ranking
  const rankingData = [
    { id: '1', name: 'Daniel Vieira', time: 'Há 08:15', badge: '✅' },
    { id: '2', name: 'Fernanda Rocha', time: 'Há 08:15', badge: '✅' },
    { id: '3', name: 'Mariana Alves', time: 'Há 07:50', badge: '' },
    { id: '4', name: 'Caio Ruvinho', time: 'Há 07:50', badge: '' },
    { id: '5', name: 'Albert Einstein', time: 'Há 07:25', badge: '' },
  ];

  const renderItem = ({ item }:any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        {item.badge ? <Text style={styles.badge}>{item.badge}</Text> : null}
      </View>
    );
  };

    const handleUsers = () => {
    navigation.navigate('(tabs)/UsersScreen');
    console.log('Navegação para Início');
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>GYMPOWER</Text>

      {/* Seção Treinando */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treinando</Text>
        <Text style={styles.subText}>Aguardando</Text>
        <Text style={styles.peopleText}>38 Pessoas</Text>
      </View>

      {/* Lista de Ranking */}
      <FlatList
        data={rankingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Seção Usuários */}
      <TouchableOpacity style={styles.userButton} onPress={handleUsers}>
        <Text style={styles.userText}>⭕ Usuários</Text>
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
  section: {
    backgroundColor: '#2A3435',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#888',
    fontSize: 14,
  },
  peopleText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A3435',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  nameText: {
    color: '#FFF',
    fontSize: 16,
  },
  timeText: {
    color: '#888',
    fontSize: 14,
  },
  badge: {
    color: '#FFC107',
    fontSize: 16,
  },
  usersText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  userButton: {
    backgroundColor: '#2A3435',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  userText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default HomeScreen;