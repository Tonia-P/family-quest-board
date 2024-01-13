import { User } from "./user";

export interface Quest {
    _id: string;
    title: string;
    description?: string | null;
    type: "daily" | "weekly" | "onetime";
    participants: string[];
    difficulty: number;
    reward: number;
}
