import { User } from "./user";

export interface Quest {
    deadline: string;
    _id: string;
    title: string;
    description?: string | null;
    type: "daily" | "weekly" | "onetime";
    participants: string[];
    difficulty: number;
    reward: number;
    completed: boolean;
}
