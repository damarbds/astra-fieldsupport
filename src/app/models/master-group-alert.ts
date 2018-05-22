export class User {
    userID: string;
    name: string;
    email: string
}

export class AlertGroupList {
    id : number
    code : string;
    userCount : number;
}

export class AlertGroupDetail {
    code : string;
    user :
        [{
            userID: string;
            name: string;
            email: string
        }]
}