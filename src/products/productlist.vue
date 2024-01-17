<template>

<ProductCard v-for="product in products" :key="product.id" :product="product" />

</template>
<script>

import { ref } from "vue";
import ProductCard from '../components/ProductCard.vue'


export default{
    components:{
        ProductCard,
    },
    

    setup(){

        const products = ref([
            {
            id: 1,
            productName: "orange",
            price: 100,
            discription: "Organice orange cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",
            productimage:"https://e1.pxfuel.com/desktop-wallpaper/230/142/desktop-wallpaper-fruits-orange-fruit.jpg",
        },
        {
            id: 2,
            productName: "apple",
            price: 160,
            productimage:"https://media.post.rvohealth.io/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg",
            discription: "Organice apple cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",

        },
        {
            id: 3,
            productName: "Fresh grape",
            productimage:"https://lazenne.com/cdn/shop/articles/Red_Grapes_a44fb818-6156-4955-b7db-3e7733cfac87.jpg?v=1537482047",
            price: 70,
            discription: "Organice grape cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",

        },
        {
            id: 4,
            productName: "cherry",
            productimage:"https://www.netmeds.com/images/cms/wysiwyg/blog/2023/04/1680774098_Cornelian-Cherries_898x450.jpg",
            price: 70,
            discription: "Organice grape cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",

        },
        {
            id: 5   ,
            productName: "Kiwi",
            productimage:"https://s1.1zoom.me/big0/302/360568-blackangel.jpg",
            price: 70,
            discription: "Organice grape cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",

        },
        {
            id: 6,
            productName: "Mango",
            productimage:"https://wallpapercave.com/wp/wp2756455.jpg",
            price: 70,
            discription: "Organice grape cultivated from techversant farm located in technonopark phase III. 100% organic and we only sell fresh product. 100% cash back if the product is not fresh.",

        }
    ])
        
        return {
            products,
}
}
}

</script>