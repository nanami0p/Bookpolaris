import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { container } from '@/styles/container';
import { font } from '@/styles/font';
import { BackgroundSection } from '@/components/BackgroundSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={container.base}>
      <ScrollView contentContainerStyle={mystyles.container}>
        <BackgroundSection
          image={require('../assets/images/top/bg_top01.png')}
          height={300}
          imageStyle={{ position: 'absolute', bottom: 0 }}
        >
          <View style={mystyles.header}>
            <Text style={font.fontSize14}>
              総読了冊数：<Text style={mystyles.totalNumber}>975冊</Text>
            </Text>
            <Text style={font.fontSize14}>
              あなたは読書の旅で星のかけらを975個集めました。
            </Text>
            <Text style={font.fontSize14}>
              かけらをつないで新たな星座を描こう。
            </Text>
            <Text style={font.fontSize12}>次の星座まであと25冊</Text>
            <ProgressBar progress={975 / 1000} style={mystyles.progress} />
            <Text style={mystyles.progressLabel}>975/1000</Text>
          </View>
        </BackgroundSection>

        {/* 登録本のリスト */}
        <View style={mystyles.booksContainer}>
          {[...Array(6)].map((_, i) => (
            <View style={mystyles.book} key={i}>
              <Image
                source={require('../assets/images/img.png')}
                style={mystyles.bookImage}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity style={mystyles.button}>
          <Text style={mystyles.buttonText}>登録本の一覧</Text>
        </TouchableOpacity>

        {/* 各セクションエリア */}
        <View style={mystyles.card}>
          <Text style={mystyles.cardTitle}>AIによるブックマッチング</Text>
          <Text style={mystyles.cardText}>
            登録した読書傾向をもとに、{"\n"}
            AIがあなたにぴったりの一冊を提案します！{"\n"}
            次に読みたい本を探したい、{"\n"}
            ジャンルを広げたいときに試してみて。
          </Text>
          <TouchableOpacity style={mystyles.cardButton}>
            <Text style={mystyles.cardButtonText}>ブックマッチングを試す</Text>
          </TouchableOpacity>
        </View>

        <View style={mystyles.card}>
          <Text style={mystyles.cardTitle}>読書タイプ診断</Text>
          <Text style={mystyles.cardText}>
            同じ本を読んでも、どこに惹かれるかは人それぞれ。{"\n"}
            Bookpolarisの読書タイプ診断では、{"\n"}
            あなたの読書スタイルを24種類に分類。{"\n"}
            物語の中で生きる共感者、知識を吸収し続ける本の賢者、{"\n"}
            隠された真実を暴く名探偵… あなたはどのタイプ？
          </Text>
          <TouchableOpacity style={mystyles.cardButton}>
            <Text style={mystyles.cardButtonText}>読書タイプを診断する</Text>
          </TouchableOpacity>
        </View>

        <View style={mystyles.card}>
          <Text style={mystyles.cardTitle}>読書年表</Text>
          <Text style={mystyles.cardText}>
            読書年表は、あなたの読書の軌跡を振り返る{"\n"}
            タイムラインです。いつ、どんな本を読んだのか{"\n"}
            時系列で一目でわかるから、過去の読書体験を{"\n"}
            振り返ったり、新たな気づきを得る{"\n"}
            きっかけにもなります。
          </Text>
          <TouchableOpacity style={mystyles.cardButton}>
            <Text style={mystyles.cardButtonText}>読書年表で軌跡を振り返る</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mystyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalNumber: {
    color: '#4A90E2',
    fontSize: 20,
  },
  progress: {
    width: '100%',
    height: 10,
    borderRadius: 5,
  },
  progressLabel: {
    fontSize: 12,
  },
  booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  book: {
    width: '30%',
    marginBottom: 10,
  },
  bookImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  button: {
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 8,
  },
  cardButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
