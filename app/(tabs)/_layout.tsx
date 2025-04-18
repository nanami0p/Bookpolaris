import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import AppLoading from 'expo-app-loading';
import { customFonts } from '../../styles/font';
import { gradients } from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function TabLayout() {
  // フォントの読み込み
  const [fontsLoaded] = Font.useFonts(customFonts);
  if (!fontsLoaded) return <AppLoading />;

  // 計算式でタブバーの幅を出す
  const screenWidth = Dimensions.get('window').width;
  const tabBarWidth = screenWidth - 40;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          width: tabBarWidth,
          height: 65,
          borderTopWidth: 0,
          borderRadius: 10,
          alignSelf: 'center',
          overflow: 'hidden',
        },
        tabBarContainerStyle: {
          position: 'absolute',
          bottom: 20,
          width: tabBarWidth,
          alignSelf: 'center', // ← 中央寄せの本命
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={gradients.gradientBlue}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 10 }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/common/icon_home_active.png')
                  : require('../../assets/images/common/icon_home.png')
              }
              style={{ width: 48, height: 36, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-books"
        options={{
          title: 'マイ本棚',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/common/icon_book_active.png')
                  : require('../../assets/images/common/icon_book.png')
              }
              style={{ width: 48, height: 36, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="book-registration"
        options={{
          title: '本の登録',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/common/icon_camera_active.png')
                  : require('../../assets/images/common/icon_camera.png')
              }
              style={{ width: 48, height: 36, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="polaris-ai"
        options={{
          title: 'Polaris-AI',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/common/icon_polarisai_active.png')
                  : require('../../assets/images/common/icon_polarisai.png')
              }
              style={{ width: 48, height: 36, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="mypage"
        options={{
          title: 'マイページ',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/common/icon_mypage_active.png')
                  : require('../../assets/images/common/icon_mypage.png')
              }
              style={{ width: 48, height: 36, resizeMode: 'contain' }}
            />
          ),
        }}
      />
    </Tabs>
    
  );
}
