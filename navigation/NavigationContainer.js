import React from 'react';
import { useSelector } from 'react-redux';

import ShopNavigator from './ShopNavigator';

const NavigationContainer = props => {
    
    const isAuth = useSelector(state => !!state.auth.token);

    // useEffect(() => {
    //     if (!isAuth) {
    //         navRef.current.dispatch(NavigationActions.navigate({ routeName: 'Auth'}));
    //     }
    // }, [isAuth])

    return <ShopNavigator />;
};

export default NavigationContainer;