import axios from 'axios';

const catalog = [
    {
        title: 'Black Shirt',
        category: 'Shirts',
        price: 15.99,
        image: '/images/blackt.jpg',
        _id: '1',
    },
    {
        title: 'White Shirt',
        category: 'Shirts',
        price: 15.99,
        image: '/images/whitet.webp',
        _id: '2',
    },
    {
        title: 'Black Hoodie',
        category: 'Hoodies',
        price: 59.99,
        image: '/images/blackhoodie.jpg',
        _id: '3',
    },
    {
        title: 'Hi-Vis Hoodie',
        category: 'Hoodies',
        price: 59.99,
        image: '/images/hi-vis.jpg',
        _id: '4',
    },
    {
        title: 'Patriotic Cap',
        category: 'Hats',
        price: 12.99,
        image: '/images/afhat.jpg',
        _id: '5',
    },
    {
        title: 'Trucker Cap',
        category: 'Hats',
        price: 12.99,
        image: '/images/truckercap.jpg',
        _id: '6',
    },
    {
        title: 'Coffee Mug',
        category: 'Household',
        price: 8.99,
        image: '/images/mug.webp',
        _id: '7',
    },
    {
        title: 'Beer Stein',
        category: 'Household',
        price: 19.99,
        image: '/images/bsmug.webp',
        _id: '8',
    },
    {
        title: 'Heavy Waxed Coat',
        category: 'Outerwear',
        price: 89.99,
        image: '/images/waxedj.jpg',
        _id: '9',
    },
];


var categories = ['Shirts', 'Hoodies', 'Hats', 'Outerwear', 'Household'];

class DataService {

    async getProducts() {
        // todo: call the server to retrieve products
        let response = await axios.get("http://127.0.0.1:5000/api/products");
        return response.data;

        // hardcoded values
        //return catalog;
    }

    getCategories() {
        // todo: call the server 

        // hardcoded values
        return categories;
    }

    async saveProduct (product){
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }

    async saveCoupons (coupon){
        let response = await axios.post("http:/127.0.0.1:5000/api/coupons", coupon);
        return response.data;
    }

    async getCoupons (){
        let response = await axios.get("http:/127.0.0.1:5000/api/coupons");
        return response.data;
    }
}

export default new DataService();