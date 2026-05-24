import { Injectable } from '@nestjs/common';
import { DYNAMIC_FORMS_MOCK } from './mocks/forms.mock';
import { DynamicFormSchema } from './interfaces/dynamic-form.interface';

@Injectable()
export class FormsRepository {
  private readonly forms = DYNAMIC_FORMS_MOCK;

  findAll(): DynamicFormSchema[] {
    return this.forms;
  }

  findById(id: number): DynamicFormSchema | undefined {
    return this.forms.find((form) => form.id === id);
  }
}
