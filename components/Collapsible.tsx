import { PropsWithChildren, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Collapsible({ children, title }: PropsWithChildren<{ title: string }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Text style={styles.headingText}>
          {isOpen ? '▼' : '▶'} {title}
        </Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 6,
    marginLeft: 16,
  },
});
