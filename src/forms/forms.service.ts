import { Injectable, NotFoundException } from '@nestjs/common';
import { FormsRepository } from './forms.repository';
import { DynamicFormSchema } from './interfaces/dynamic-form.interface';

@Injectable()
export class FormsService {
  constructor(private readonly formsRepository: FormsRepository) {}

  findAll(): DynamicFormSchema[] {
    return this.formsRepository.findAll();
  }

  findById(id: number): DynamicFormSchema {
    const form = this.formsRepository.findById(id);

    if (!form) {
      throw new NotFoundException(`Form with id ${id} was not found`);
    }

    return form;
  }
}
