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

type Color = {
    colorName?: string;
    value?: string;
    available?: boolean;
};

type Size = {
    sizeName?: string;
    value?: string;
    available?: boolean;
};

// type GalleryItemType = {
//     id: number | undefined;
//     galleryItem?: string | undefined | null;
// };

export interface GalleryItemType {
    id: number;
    galleryItem: string;
}

type Attribute = {
    type: "color" | "size" | string;
    colors?: Color[];
    sizes?: Size[];
};

// type Product = {
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     rate: number;
//     description: string;
//     discount: number;
//     inStock: boolean;
//     quantity: number;
//     gallery?: GalleryItemType[];
//     attributes?: Attribute[] | null;
//     review?: {
//         id: number;
//         message: string;
//     }[];
// };

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rate: number;
    description: string;
    discount: number;
    inStock: boolean;
    quantity: number;
    gallery: GalleryItemType[];
    attributes: {
        type: string;
        colors?: { colorName: string; value: string; available: boolean }[];
        sizes?: { sizeName: string; value: string; available: boolean }[];
    }[]; // Updated attributes type
    review: {
        id: number;
        message: string;
    }[];
}



type ProductList = Product[];
