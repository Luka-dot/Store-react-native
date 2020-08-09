import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import HeaderButtons from '../../components/UI/HeaderButton';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    
    return (
        <FlatList 
            data={userProducts} 
            renderItem={itemData => <ProductItem 
                                        image={itemData.item.imageUrl} 
                                        title={itemData.item.title} 
                                        price={itemData.item.price} 
                                        onViewDetails={() => {}}
                                        onAddToCart={() => {}}
                                    />} 
        />
    )
};

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                navData.navigation.toggleDrawer();
                }}
            />
            </HeaderButtons>
      ),}
};

export default UserProductsScreen;