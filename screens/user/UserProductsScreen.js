import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    
    return (
        <FlatList data={userProducts} />
    )
};

export default UserProductsScreen;