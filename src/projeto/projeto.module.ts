import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './projeto.entity';
import { ProjetoService } from './projeto.service';
import { ProjetoController } from './projeto.controller';  // Import correto do controlador

@Module({
  imports: [TypeOrmModule.forFeature([Projeto])],
  providers: [ProjetoService],
  controllers: [ProjetoController], // Referência correta ao controlador
})
export class ProjetoModule {}

