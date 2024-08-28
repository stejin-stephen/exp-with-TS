import { Response, Request } from "express";

export function getUsers(request: Request, response: Response) {
    const users = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alicej@example.com' },
        { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com' }
    ];

    response.json(users);
}

export function getUserById(request: Request, response: Response) {
    const user = { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com' };

    response.json(user);
}

export function createUser(request: Request, response: Response) {
    const user = { id: 3, name: 'Alice Johnson', email: 'alicej@example.com' };

    response.json(user);
}