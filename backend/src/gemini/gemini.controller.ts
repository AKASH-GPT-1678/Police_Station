import { Controller, Post , Body} from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {

    constructor(private geminiService: GeminiService) {}




    @Post('generate')
    async generate(@Body('prompt') prompt: string) {
        const response = await this.geminiService.generateContent(prompt);
        return { response };
    }
}
