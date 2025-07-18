import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class CloudService {
    private storage: Storage;
    private bucketName: string;

    constructor() {
        this.storage = new Storage({
            projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
            keyFilename: process.env.GOOGLE_CLOUD_KEYFILE,
        });

        this.bucketName = process.env.GOOGLE_CLOUD_BUCKET ?? "";
    }

    async uploadFile(filePath: string, destination: string): Promise<string> {
        await this.storage.bucket(this.bucketName).upload(filePath, {
            destination,
            gzip: true,
            metadata: {
                cacheControl: 'public, max-age=31536000',
            },
        });

        return `https://storage.googleapis.com/${this.bucketName}/${destination}`;
    }

    async deleteFile(fileName: string): Promise<void> {
        await this.storage.bucket(this.bucketName).file(fileName).delete();
    }

    async getPublicUrl(fileName: string): Promise<string> {
        return `https://storage.googleapis.com/${this.bucketName}/${fileName}`;
    }
}
