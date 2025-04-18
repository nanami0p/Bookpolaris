
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MatchingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AIによるブックマッチング</Text>
      <Text style={styles.text}>このページではAIがあなたにおすすめの本を提案します。</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
  },
});
