import { Item } from "./item";

export interface Shop {
    _id: string;
    name: string;
    owner: string;
    items: Item[];
}
