import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  View,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface Props {
  children: React.ReactNode;
  image: ImageSourcePropType;
  height?: number;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const BackgroundSection = ({
  children,
  image,
  height = 280,
  imageStyle,
  containerStyle,
}: Props) => {
  return (
    <View style={[{ position: 'relative' }, containerStyle]}>
      <ImageBackground
        source={image}
        style={[{ height, width: '100%' } as ViewStyle, imageStyle]}
        resizeMode="cover"
      >
        {/* 背景画像上に配置したい場合はこちら */}
      </ImageBackground>
      
      {/* 前面に配置したい要素（テキストやバーなど） */}
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height }}>
        {children}
      </View>
    </View>
  );
};
