import { router, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  // Dados fictícios para a lista de ranking
  const rankingData = [
    { id: '1', name: 'Daniel Vieira', time: 'Há 08:15', badge: '✅' },
    { id: '2', name: 'Fernanda Rocha', time: 'Há 08:15', badge: '✅' },
    { id: '3', name: 'Mariana Alves', time: 'Há 07:50', badge: '' },
    { id: '4', name: 'Caio Vinicius', time: 'Há 07:50', badge: '' },
    { id: '5', name: 'Albert Einstein', time: 'Há 07:25', badge: '' },
  ];

  const navigation = useNavigation();

  // Configurar o header com o botão de logout
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        {item.badge ? <Text style={styles.badge}>{item.badge}</Text> : null}
      </View>
    );
  };

  const handleUsers = () => {
    router.push('/(tabs)/UsersScreen');
    console.log('Navegação para Início');
  };

  const handleLogout = () => {
    console.log('Usuário deslogado');
    router.replace('/');
  };

  // Contar a quantidade de pessoas treinando
  const trainingCount = rankingData.length;

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>GYMPOWER</Text>

      {/* Seção Treinando */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Treinando</Text>
        <Text style={styles.subText}>Aguardando</Text>
        <Text style={styles.peopleText}>{trainingCount} Pessoas</Text>
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
  },
  logoutButton: {
    marginRight: 15,
    padding: 10,
  },
  logoutText: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;