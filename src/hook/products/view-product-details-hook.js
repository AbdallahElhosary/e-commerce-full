
import ViewHomeProductHook from './view-home-product-hook';
import AllCategoryPageHook from '../category/all-category-page-hook';
import AllBrandPageHook from '../brand/all-brand-page-hook';

const ViewProductsDetalisHook = (id) => {

    const [products] = ViewHomeProductHook()
    const [brand] = AllBrandPageHook();
    const [category] = AllCategoryPageHook();

    console.log(brand);

    const [oneProduct] = products.filter((product) => product._id === id);
    const similerProducts = products.filter((product) => product.category === oneProduct.category && product._id !== oneProduct._id);

    const [oneCategory] = category.data.filter((cat) => oneProduct.category === cat._id);
    const [oneBrand] = brand.data.filter((brand) => oneProduct.brand === brand._id);

    let mappedImages = [];
    if (oneProduct.images) {
        mappedImages = oneProduct.images.map((imageUrl) => ({
            original: imageUrl,
        }));
    }

    return [oneProduct, mappedImages, oneCategory, oneBrand, similerProducts];
}

export default ViewProductsDetalisHook;