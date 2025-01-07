type Order = {
    id: number;
    date: string;
    total: number;
    status: string
};

type orderType = {
    content: Order[];
};

type inputType = {
    inputName: string;
    placeholder: string;
    inputType: string;
    value?: string;
    label: string;
}


type pagenationType = {

    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;

}
type cartType = {

    name: string,
    price: number,
    img: string,
    quantity?: number
}
type productType = {
    productId: number,
    productName: string,
    productDescription: string,
    productImageOne: string,
    productImageTwo: string



}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rate: number;
    description: string;
    discount: number;
    inStock: boolean;
    quantity: number;
    gallery: { id: number, galleryItem: string }[];
    attributes: { colors: { colorName: string, value: string, available: boolean }[] }[];
    review: { id: number, message: string }[];
}

interface products {

    content: Product[]

}
interface Attribute {
    type: string;
    colors?: { colorName?: string; value?: string; available?: boolean }[];
    sizes?: { sizeName?: string; value?: string; available?: boolean }[];
}