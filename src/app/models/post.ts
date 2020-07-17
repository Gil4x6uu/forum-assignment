import { Comment } from './comment';

export class Post {

    _id: string;
    title: string;
    body: string;
    userName: string;
    comments: Comment[];
    date: string;



    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }

    }
}