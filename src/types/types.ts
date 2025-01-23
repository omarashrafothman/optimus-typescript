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

type GalleryItem = {
    id?: number;
    galleryItem?: string;
};



type Attribute = {
    type: "color" | "size" | string; // Allow any string for flexibility
    colors?: Color[];
    sizes?: Size[];
};

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    rate: number;
    description: string;
    discount: number;
    inStock: boolean;
    quantity: number;
    gallery?: GalleryItem[];
    attributes?: Attribute[] | null;
    review?: {
        id: number;
        message: string;
    }[];
};




type ProductList = Product[];
