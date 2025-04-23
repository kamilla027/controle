import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projeto } from './projeto.entity';

@Injectable()
export class ProjetoService {
  constructor(
    @InjectRepository(Projeto)
    private projetoRepository: Repository<Projeto>,
  ) {}

  // Listar todos os projetos
  findAll(): Promise<Projeto[]> {
    return this.projetoRepository.find();
  }

  // Buscar um projeto por ID
  async findOne(id: number): Promise<Projeto> {
    const projeto = await this.projetoRepository.findOneBy({ id });
    if (!projeto) {
      throw new NotFoundException(`Projeto com ID ${id} não encontrado`);
    }
    return projeto;
  }

  // Criar um novo projeto
  create(projetoData: Partial<Projeto>): Promise<Projeto> {
    const projeto = this.projetoRepository.create(projetoData);
    return this.projetoRepository.save(projeto);
  }

  // Atualizar um projeto existente
  async update(id: number, projetoData: Partial<Projeto>): Promise<Projeto> {
    const projeto = await this.findOne(id);
    const updated = Object.assign(projeto, projetoData);
    return this.projetoRepository.save(updated);
  }

  // Remover um projeto
  async remove(id: number): Promise<void> {
    const projeto = await this.findOne(id);
    await this.projetoRepository.remove(projeto);
  }
}
