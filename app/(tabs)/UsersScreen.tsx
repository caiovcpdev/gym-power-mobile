import { StackNavigationProp } from '@react-navigation/stack';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  '(tabs)/HomeScreen': undefined;
  '(tabs)/LoginScreen': undefined;
};

type User = {
  id: string;
  name: string;
  checkIn: string;
  checkOut: string;
};

const UserScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState<User[]>([
    {
      id: '1',
      name: 'Daniel Vieira',
      checkIn: '08:15',
      checkOut: '09:45',
    },
    {
      id: '2',
      name: 'Fernanda Rocha',
      checkIn: '08:15',
      checkOut: '09:45',
    },
    {
      id: '3',
      name: 'Mariana Alves',
      checkIn: '07:50',
      checkOut: '09:45',
    },
    {
      id: '4',
      name: 'Caio Vinicius',
      checkIn: '08:15',
      checkOut: '09:45',
    },
    {
      id: '5',
      name: 'Natalia Damasceno',
      checkIn: '08:15',
      checkOut: '09:45',
    },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Filter users based on search query
  const filteredData = userData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  const handleCheckIn = (userId: string) => {
    const currentTime = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setUserData((prevData) =>
      prevData.map((user) =>
        user.id === userId ? { ...user, checkIn: currentTime } : user
      )
    );
    setSelectedUser((prev) =>
      prev && prev.id === userId ? { ...prev, checkIn: currentTime } : prev
    );
    console.log(`Check-in realizado para ${userId} às ${currentTime}`);
  };


  const handleCheckOut = (userId: string) => {
    const currentTime = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setUserData((prevData) =>
      prevData.map((user) =>
        user.id === userId ? { ...user, checkOut: currentTime } : user
      )
    );
    setSelectedUser((prev) =>
      prev && prev.id === userId ? { ...prev, checkOut: currentTime } : prev
    );
    console.log(`Check-out realizado para ${userId} às ${currentTime}`);
  };

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => setSelectedUser(item)}
    >
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.historyText}>Histórico de acessos</Text>
      <Text style={styles.timeText}>Check-in {item.checkIn}</Text>
      <Text style={styles.timeText}>Check-out {item.checkOut}</Text>
    </TouchableOpacity>
  );

  const handleHome = () => {
    router.push('/(tabs)/HomeScreen');
    console.log('Navegação para Início');
  };

  const closeDetails = () => {
    setSelectedUser(null);
  };

  return (
    <View style={styles.container}>
      {selectedUser ? (
        // User Detail View
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Detalhes do Usuário</Text>
          <Text style={styles.detailName}>{selectedUser.name}</Text>
          <Text style={styles.detailText}>
            Check-in: {selectedUser.checkIn}
          </Text>
          <Text style={styles.detailText}>
            Check-out: {selectedUser.checkOut}
          </Text>
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => handleCheckIn(selectedUser.id)}
          >
            <Text style={styles.buttonText}>✅ Fazer Check-in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.checkOutButton}
            onPress={() => handleCheckOut(selectedUser.id)}
          >
            <Text style={styles.buttonText}>❌ Fazer Check-out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={closeDetails}>
            <Text style={styles.buttonText}>⬅ Voltar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Main User List View
        <>
          <Text style={styles.title}>Usuários</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por usuário..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Nenhum usuário encontrado</Text>
            }
          />
          <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
            <Text style={styles.homeText}>⭕ Início</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526',
    padding: 20,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#1C2526',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    backgroundColor: '#2A3435',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
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
  emptyText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  detailName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailText: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  checkInButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkOutButton: {
    backgroundColor: '#F44336',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserScreen;