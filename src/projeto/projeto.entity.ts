import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projetos') // nome da tabela no banco de dados
export class Projeto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('text', { nullable: true })
  descricao: string;

  @Column({
    type: 'enum',
    enum: ['Planejado', 'Em andamento', 'Concluído', 'Cancelado'],
    default: 'Planejado',
  })
  status: 'Planejado' | 'Em andamento' | 'Concluído' | 'Cancelado';

  @Column({ type: 'date', nullable: true })
  data_inicio: string;

  @Column({ type: 'date', nullable: true })
  data_fim: string;

  @Column({ nullable: true })
  responsavel: string;
}
