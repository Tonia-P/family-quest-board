export interface Item {
    _id: string;
    name: string;
    description?: string|null;
    price: number;
    selected: boolean;
}
