import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet, Button } from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const AuthScreen = props => {
    return (
        <KeyboardAvoidingView 
            behavior='padding'
            keyboardVerticalOffset={50} 
            style={styles.screen}
        >
            <Card style={styles.authContainer} >
                <ScrollView>
                    <Input 
                        id="email" 
                        label="EMAIL"
                        keyboardType="email-address"
                        required
                        email
                        autoCapitalize="none"
                        errorMessage="Please enter valid email address"
                        onValueChange={() => {}}
                        initialValue=""
                    />
                    <Input 
                        id="password" 
                        label="PASSWORD"
                        keyboardType="default"
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorMessage="Please enter valid password"
                        onValueChange={() => {}}
                        initialValue=""
                    />
                    <Button 
                        title="login"
                        color={Colors.primary}
                        onPress={() => {}}
                    />
                    <Button 
                        title="Switch to Sign Up"
                        color={Colors.primary}
                        onPress={() => {}}
                    />
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({

});

export default AuthScreen;