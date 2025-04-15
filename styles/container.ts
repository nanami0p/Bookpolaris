import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const container = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgWrapper:{
    position: 'relative',
    justifyContent: 'center',
  },
  BackgroundInner:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // 背景として背面にまわす
  },
});
