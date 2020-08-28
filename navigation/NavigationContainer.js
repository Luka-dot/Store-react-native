import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationAction } from 'react-navigation';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    const navRef = useRef();
    const isAuth = useSelector(state => !!state.auth.token);

    useEffect(() => {
        if (!isAuth) {
            navRef.current.dispatch(NavigationAction.navigate({ routName: 'Auth'}));
        }
    }, [isAuth])

    return <ShopNavigator ref={navRef} />;
};

export default NavigationContainer;