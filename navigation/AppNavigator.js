import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './ShopNavigator';

const AppNavigator = props => {
    
    const isAuth = useSelector(state => !!state.auth.token);

    // useEffect(() => {
    //     if (!isAuth) {
    //         navRef.current.dispatch(NavigationActions.navigate({ routeName: 'Auth'}));
    //     }
    // }, [isAuth])

    return ;
};

export default AppNavigator;