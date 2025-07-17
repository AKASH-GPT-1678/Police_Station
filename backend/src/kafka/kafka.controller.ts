import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { CreateKafkaDto } from './dto/create-kafka.dto';
import { UpdateKafkaDto } from './dto/update-kafka.dto';

@Controller()
export class KafkaController {
  constructor(private readonly kafkaService: KafkaService) {}

  @MessagePattern('pushKafka')
  create(@Payload() createKafkaDto: CreateKafkaDto) {
    return this.kafkaService.create(createKafkaDto);
  }

  // @MessagePattern('findAllKafka')
  // findAll() {
  //   return this.kafkaService.findAll();
  // }

  // @MessagePattern('findOneKafka')
  // findOne(@Payload() id: number) {
  //   return this.kafkaService.findOne(id);
  // }

  // @MessagePattern('updateKafka')
  // update(@Payload() updateKafkaDto: UpdateKafkaDto) {
  //   return this.kafkaService.update(updateKafkaDto.id, updateKafkaDto);
  // }

  // @MessagePattern('removeKafka')
  // remove(@Payload() id: number) {
  //   return this.kafkaService.remove(id);
  // }
}
