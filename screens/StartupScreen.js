import React, { useEffect } from 'react';
import { View,ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import Colors from '../constants/Colors';

const StartupScreen = props => {
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const parsedUserData = JSON.parse(userData);
        };

        tryLogin();
    }, []);

    return (
        <View style={styles.screen} >
            <ActivityIndicator size='large' color={Colors.primary} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default StartupScreen;