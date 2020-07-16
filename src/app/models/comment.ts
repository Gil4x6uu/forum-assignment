

export class Comment {

    post_id: string;
    message: string;
    user_name: string;
 


    constructor(obj: any = null) {
        if (obj != null) {
            Object.assign(this, obj);
        }

    }
}