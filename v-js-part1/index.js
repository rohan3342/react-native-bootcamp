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

// 1st Way 
// list.map(data => {
//     Object.values(data.primaryCategory).map(item => (data[item[0]] = item[1]));
// });
// console.log(list);

// // 2nd Way - using spread operators
// list.map(data => (data = { ...data, ...data.primaryCategory }));
// console.log(list);

// // 3rd Way
// list.map(data => {
//     data = Object.assign({},data,data.primaryCategory);
// });
// console.log(list);

