import { Quest } from "./quest";

export interface User {
    id: string;
    username: string;
    money: number;
    quests: Quest[];
}
