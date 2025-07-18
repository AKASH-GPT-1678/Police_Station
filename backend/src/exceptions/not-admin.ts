export class AdminSignatureNotFoundException extends Error {

    constructor() {
        super('Admin signature not found');
    }
}