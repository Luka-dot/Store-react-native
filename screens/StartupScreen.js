import React, { useEffect } from 'react';
import { View,ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';

const StartupScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const parsedUserData = JSON.parse(userData);
            const {token, userId, expirationDate} = parsedUserData;
            const expirationDate = new Date(expirationDate);

            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Auth');
                return;
            }

            props.navigation.navigate('Shop');
            dispatch(authActions.authenticate(userId, token));
        };

        tryLogin();
    }, [dispatch]);

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