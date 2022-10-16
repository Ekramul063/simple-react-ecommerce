import { getStoreCart } from "../utilities/fakedb";

export const productsAndCartLoader = async()=>{
    //get prouducts
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //saved cart
    const savedCart = getStoreCart();
    const previousCart =[];
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity= quantity;
            previousCart.push(addedProduct);

        }
    }
    return {products:products, initialCart : previousCart};
}
