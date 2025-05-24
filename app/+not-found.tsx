import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen />
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>
          Algo deu errado por aqui ;(  .
        </ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link" style={styles.linkText}>
            Volte por aqui!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36, // Tamanho grande, como o título "GYMPOWER"
    fontWeight: 'bold',
    color: '#FFC107', 
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#2A3435', 
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  linkText: {
    color: '#FFF', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center' 
  },
});