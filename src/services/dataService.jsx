
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

    getProducts() {
        // todo: call the server to retrieve products

        // hardcoded values
        return catalog;
    }

    getCategories() {
        // todo: call the server 

        // hardcoded values
        return categories;
    }
}

export default new DataService();