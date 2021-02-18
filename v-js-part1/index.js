const list = [
    {
        productId: 321,
        barcodeId: 321,
        productName: 'Black grapes',
        volume: 1.0,
        price: 3.0,
        barcoded: null,
        primaryCategory: {
            categoryId: 1,
            categoryName: 'fruits',
        },
    },
    {
        productId: 456,
        barcodeId: 456,
        productName: 'Grapes',
        volume: 3.0,
        price: 150.0,
        barcoded: null,
        primaryCategory: {
            categoryId: 1,
            categoryName: 'fruits',
        },
    },
];

//Convert the above object into a new object with following keys

list.map(data =>
    Object.entries(data.primaryCategory).map(item => (data[item[0]] = item[1]))
);
console.log(list);

const resultSet = [
    {
        productId: 321,
        barcodeId: 321,
        productName: 'Black grapes',
        volume: 1.0,
        price: 3.0,
        barcoded: null,
        categoryId: 1,
        categoryName: 'fruits',
        primaryCategory: {
            categoryId: 1,
            categoryName: 'fruits',
        },
    },
    {
        productId: 456,
        barcodeId: 456,
        productName: 'Grapes',
        volume: 3.0,
        price: 150.0,
        barcoded: null,
        categoryId: 1,
        categoryName: 'fruits',
        primaryCategory: {
            categoryId: 1,
            categoryName: 'fruits',
        },
    },
];
