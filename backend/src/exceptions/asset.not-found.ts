import { HttpException, HttpStatus } from "@nestjs/common";


export class AssetNotFoundException extends HttpException {
    constructor() {
        super('Bhag Bhosdike koi asset wesst nahi hai yaha', HttpStatus.NOT_FOUND);
    }
}