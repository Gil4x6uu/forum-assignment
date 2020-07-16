import { Comment } from './comment';

export class Post {
    
    _id: string;
    title: string;
    body: string;
    comments: Comment[];


    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }
        
    }
}