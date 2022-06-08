const products = [
    {
        id: 'product1',
        name:'Radha Krishna With Flute',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/5342/28931/Aqua_Power_HD_20161219_112244__94926.1506574069.jpg?c=2',
        description: 'Handpainted Art Painting - 32in X 24in',
        size:'80 cm X 60 cm',
        price:'13333'
    },
    {
        id: 'product2',
        name:'Ganesh Vandana',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/6237/15019/Paintings_093__12129.1506574091.jpg?c=2',
        description: 'Handpainted Art Painting - 36in X 24in',
        size:'90 cm X 60 cm',
        price:'8001'
    },
    {
        id: 'product3',
        name:'Dance Of Passion',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/7177/28919/IMG_0246__67411.1506574156.jpg?c=2',
        description: 'Handpainted Art Painting - 32in X 32in',
        size:'80 cm X 80 cm',
        price:'13333'
    },
    {
        id: 'product4',
        name:'Buddha In Green',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/2374/9381/Buddha(Green)_36x24__35878__79585.1506573936.jpg?c=2',
        description: 'Handpainted Art Painting - 48in X 24in',
        size:'120 cm X 60 cm',
        price:'4690'
    },
    {
        id: 'product5',
        name:'Modern127',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/302/5859/Modern127__79937__27244.1506573857.jpg?c=2',
        description: 'Handpainted Art Painting - 24in X 24in',
        size:'60 cm X 60 cm',
        price:'6831'
    },
    {
        id: 'product6',
        name:'Rajasthani Women',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/21451/33473/1493029878253_Rajasthani_women__85109.1506574682.jpg?c=2',
        description: 'Handpainted Art Painting - 36in X 48in',
        size:'90 cm X 118 cm',
        price:'11871'
    },
    {
        id: 'product7',
        name:'Radha Krishna Love Forever',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/9484/19031/31-2626__84791.1506574242.jpg?c=2',
        description: 'Handpainted Art Painting - 24in X 24in',
        size:'60 cm X 60 cm',
        price:'6831'
    },
    {
        id: 'product8',
        name:'Buddhism Art 2',
        image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/7226/17078/24x36_19_84349.1434702435.1280.1280__87464.1506574140.jpg?c=2',
        description: 'Handpainted Art Painting - 24in X 36in',
        size:'60 cm X 90 cm',
        price:'8361'
    }
];
export const getAllProducts = () => products;
export const getProduct = (id:any) => products.find(product =>product.id === id)