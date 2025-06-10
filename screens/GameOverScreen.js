import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 100;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={[styles.rootContainer, height < 400 && { paddingVertical: 16 }]}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/success.webp')}
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                    rounds to guess the number{' '}
                    <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});
