type Order = {
    id: number;
    date: string;
    total: number;
    status: string
};

export interface orderType {
    content: Order[];
};
export interface inputType {
    inputName: string;
    placeholder: string;
    inputType: 'text' | 'email' | 'password' | 'number' | 'search' | string; // Limiting to common input types
    value?: string;
    label: string;
};


export interface pagenationType {

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
export interface productType {
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

export interface Attribute {
    type: "color" | "size" | string;
    colors?: Color[]; // Allow undefined
    sizes?: Size[]; // Allow undefined
}


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
