import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { container } from '@/styles/container';
import { font } from '@/styles/font';

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={[container.base, styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={font.pageTitle}>Explore</Text>
      </View>
      <Text style={font.fontSize14}>ここに必要な説明や案内文を記載してください。</Text>
      {/* ここに必要なセクションやカードなどを追加 */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
});
