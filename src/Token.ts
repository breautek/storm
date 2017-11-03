import * as jwt from 'jsonwebtoken';

export class Token {
    private signature: string;

    constructor(signature: string) {
        this.signature = signature;
    }

    getSignature(): string {
        return this.signature;
    }
}
