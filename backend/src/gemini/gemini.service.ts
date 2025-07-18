import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeminiService {
  private genAI: GoogleGenerativeAI;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    this.genAI = new GoogleGenerativeAI(apiKey as string);
  }

  async generateContent(prompt: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const result = await model.generateContent(`${prompt}. Please respond with at least 400 words.`);
      const response = await result.response;
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw error;
    }
  }
}
