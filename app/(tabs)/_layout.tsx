import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1C2526',
        },
        headerTintColor: '#fff',
        headerTitle: () => null,
        tabBarStyle: {
          backgroundColor: '#1C2526',
        },
        tabBarActiveTintColor: '#FFC107',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tabs.Screen name="HomeScreen" options={{ 
        title: 'Início' ,
        tabBarStyle: { display: 'none' }
        }} />
        
      <Tabs.Screen name="UsersScreen" options={{ 
        title: 'Usuários',
        tabBarStyle: { display: 'none' }
       }} />
    </Tabs>
  );
}
