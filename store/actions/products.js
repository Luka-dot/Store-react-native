export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = productId => {
    return { type: DELETE_PRODUCT, pid: productId };
};

export const createProduct = (title, description, imageUrl, price) => {
    return dispatch => {
        // can execute any async code.
        fetch('https://rn-store-9a607.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        dispatch( { type: CREATE_PRODUCT, productData: {
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price
            } 
        });
    }   
};

export const updateProduct = (id, title, description, imageUrl) => {
    return { type: UPDATE_PRODUCT,
                    pid: id,
                     productData: {
                        title: title,
                        description: description,
                        imageUrl: imageUrl,
                    } 
    };
}

