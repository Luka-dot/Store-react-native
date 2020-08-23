import React from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';

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
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({

});

export default AuthScreen;