class User {
    name: string;
    age: number;

    constructor(name:string, age: number) {
        this.age=age;
        this.name=name

    }

    greeting():string {
        return ` whats up my name is ${this.name}`
    }

}
let user = new User('new User here', 21);
user.age = 56;

interface IUser {
    name: string;
    age: number;

    greeting?(a: string): string;
}

function exe(b: IUser) {

}


exe({name: 'Ira', age: 17})
exe({
    name: 'New', age: 34, greeting: (a: string): string => {
        return 'hi';
    }
});


class Y implements IUser {
    ownXProp1: string;
    ownXProp2: string[];
    age: number;
    name: string;


}

let y = new Y();
let iUsers: IUser[] = [
    y,
    {
        name: 'asd', age: 123, greeting: (a: string): string => {
            return 'hello';
        }
    }
]

exe(new Y());

function example(user: User) {
    user.greeting();
}

let user1 = new User('Lena', 19);
example(user1);