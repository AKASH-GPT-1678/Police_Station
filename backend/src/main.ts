import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create regular REST API app
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Connect microservice (Kafka) to the same app
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'complaint-consumer',
      },
    },
  });

  // Start both API and Kafka listener
  // await app.startAllMicroservices(); // ✅ starts Kafka
  await app.listen(process.env.PORT ?? 3500); // ✅ starts HTTP
}
bootstrap();
