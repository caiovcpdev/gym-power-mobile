import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="HomeScreen" options={{ title: 'HomeScreen' }} />
      <Tabs.Screen name="RegisterScreen" options={{ title: 'RegisterScreens' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explorar' }} />
    </Tabs>
  );
}
