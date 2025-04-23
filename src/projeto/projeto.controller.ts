import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { Projeto } from './projeto.entity';

@Controller('projetos')
export class ProjetoController {  // EXPORTAR o controller
  constructor(private readonly projetoService: ProjetoService) {}

  @Get()
  findAll(): Promise<Projeto[]> {
    return this.projetoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Projeto> {
    return this.projetoService.findOne(id);
  }

  @Post()
  create(@Body() projetoData: Partial<Projeto>): Promise<Projeto> {
    return this.projetoService.create(projetoData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() projetoData: Partial<Projeto>): Promise<Projeto> {
    return this.projetoService.update(id, projetoData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.projetoService.remove(id);
  }
}
