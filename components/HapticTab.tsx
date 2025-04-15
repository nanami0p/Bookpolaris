import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (Platform.OS === 'ios') {
          // iOS のときだけ軽めのバイブを追加
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        if (props.onPressIn) {
          props.onPressIn(ev);
        }
      }}
    >
      {/* 子要素が必要ならここに追加 */}
    </PlatformPressable>
  );
}
