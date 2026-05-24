import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FormsService } from './forms.service';
import { DynamicFormSchema } from './interfaces/dynamic-form.interface';

@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get()
  findAll(): DynamicFormSchema[] {
    return this.formsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): DynamicFormSchema {
    return this.formsService.findById(id);
  }
}
