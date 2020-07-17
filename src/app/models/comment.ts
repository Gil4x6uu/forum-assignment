

export class Comment {

    post_id: string;
    message: string;
    userName: string;
    date: string;
 


    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }

    }
}