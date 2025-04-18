import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { font } from '@/styles/font';
import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { container } from '@/styles/container';
import { LinearGradient } from 'expo-linear-gradient';
import { gradients } from '@/styles/colors';
import { hide } from 'expo-splash-screen';


const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = () => {
    return (
        <View style={{ position: 'relative' , backgroundColor: '#fff'}}>
              <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 280,
                    backgroundColor: '#1C3563',
                }} />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ backgroundColor: '#fff' }}
            >
                {/* 背景付きのセクション（トップエリア） */}
                <ImageBackground
                    source={require('../assets/images/top/bg_top01.png')}
                    style={styles.topBackground}
                    resizeMode="cover"
                >
                    <View style={styles.topSection01}>
                        <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }, spacing.mb10,]}>
                            <Text style={[font.fontSize14, font.fontBold, { color: colors.white }]}>総読了冊数：</Text>
                            <Text style={[styles.allBooks, { color: colors.white },{ fontFamily: 'latoBold' }]}>975</Text>
                            <Text style={[font.fontSize14, { color: colors.white }]}>冊</Text>
                        </View>

                        <Text style={[font.fontSize14, spacing.mb10, { color: colors.white }]}>あなたは読書の旅で{"\n"}星のかけらを975個集めました。</Text>
                        <Text style={[font.fontSize12, { color: colors.white }]}>かけらをつないで新たな星座を描こう。</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            <Text style={[font.fontSize12, font.fontBold, { color: colors.white }]}>次の星座まであと25冊</Text>
                            <Text style={[styles.progressLabel, { color: colors.white },{ fontFamily: 'latoBold' }]}>975/1000</Text>
                        </View>
                        <ProgressBar progress={975 / 1000} style={styles.progress} />
                    </View>
                </ImageBackground>

                <View style={container.wrapper}>
                    {/* 登録本のリスト */}
                    <View style={[container.booksContainer, spacing.mb15]}>
                        {[...Array(9)].map((_, i) => (
                            <View style={container.book} key={i}>
                                <ImageBackground
                                    source={require('../assets/images/img.png')}
                                    style={container.bookImage}
                                    // imageStyle={{ borderRadius: 8 }}
                                    resizeMode="cover"
                                />
                            </View>
                        ))}
                    </View>

                    <View style={[container.buttonArea, spacing.mb60]}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={gradients.gradientBlue}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={container.button}
                            >
                                <Text style={container.buttonText}>登録本の一覧</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    {/* 各セクションエリア */}
                    <ImageBackground
                        source={require('../assets/images/top/top_bg_aimatching.png')}
                        style={[styles.topCardBg, styles.CardAiMatching]}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 30 }}
                    >
                        <View style={styles.topCard}>
                            <Text style={styles.cardTitle}>AIによるブックマッチング</Text>
                            <Text style={styles.cardText}>
                                登録した読書傾向をもとに、{"\n"}
                                AIがあなたにぴったりの一冊を提案します！{"\n"}
                                次に読みたい本を探したい、{"\n"}
                                ジャンルを広げたいときに試してみて。
                            </Text>
                            <TouchableOpacity style={container.outlineButton}>
                                <Text style={container.outlineButtonText}>ブックマッチングを試す</Text>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>

                    <ImageBackground
                        source={require('../assets/images/top/top_bg_readtype.png')}
                        style={[styles.topCardBg, styles.CardReadType]}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 30 }}
                    >
                        <View style={styles.topCard}>
                            <Text style={styles.cardTitle}>読書タイプ診断</Text>
                            <Text style={styles.cardText}>
                                Bookpolarisの読書タイプ診断では、{"\n"}
                                あなたの読書スタイルを24種類に分類します。{"\n"}
                                物語の中で生きる共感者、知識を吸収し続ける本の賢者、隠された真実を暴く名探偵…{"\n"}
                                あなたはどのタイプ？
                            </Text>
                            <TouchableOpacity style={container.outlineButton}>
                                <Text style={container.outlineButtonText}>読書タイプを診断する</Text>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>

                    <ImageBackground
                        source={require('../assets/images/top/top_bg_chronology.png')}
                        style={[styles.topCardBg, styles.CardChronology]}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 30 }}
                    >
                        <View style={styles.topCard}>
                            <Text style={styles.cardTitle}>読書年表</Text>
                            <Text style={styles.cardText}>
                                読書年表は、あなたの読書の軌跡を振り返る{"\n"}
                                タイムラインです。いつ、どんな本を読んだのか{"\n"}
                                時系列で一目でわかるから、過去の読書体験を{"\n"}
                                振り返ったり、新たな気づきを得る{"\n"}
                                きっかけにもなります。
                            </Text>
                            <TouchableOpacity style={container.outlineButton}>
                                <Text style={container.outlineButtonText}>読書年表で軌跡を振り返る</Text>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>

                </View>
            </ScrollView >
        </View>
    );
};

const styles = StyleSheet.create({
    topBackground: {
        width: '100%',
        height: 280,
        justifyContent: 'center',
        bottom: 0,
    },
    topSection01: {
        paddingHorizontal: 40,
    },
    allBooks: {
        fontSize: 30,
        paddingRight: 5,
    },
    progress: {
        width: '100%',
        height: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    progressLabel: {
        fontSize: 12,
        marginTop: 5,
    },
    topCardBg: {
        width: '100%',
        justifyContent: 'center',
        top: 0,
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 20,
    },
    CardAiMatching: {
        height: 220,
    },
    CardReadType: {
        height: 236,
    },
    CardChronology: {
        height:236,
    },
    topCard: {
        paddingHorizontal: 30,
        paddingTop: 25,
        marginBottom: 20,
    },
    cardTitle: {
        color: colors.mainBlue,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    cardText: {
        color: colors.mainBlue,
        fontSize: 13,
        marginBottom: 10,
        lineHeight: 21,
    },
});

export default HomeScreen;
