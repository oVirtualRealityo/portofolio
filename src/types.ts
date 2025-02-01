export interface Post {
    _id?: string;
    title: string;
    description: string;
    rating: Number;
    date: Date;
    location: string;
    createdAt: Date;
    updatedAt?: Date;
    tags: string[];
}