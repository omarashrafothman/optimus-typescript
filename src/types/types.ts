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
    type: string;
    value?: string;
    label: string;
}