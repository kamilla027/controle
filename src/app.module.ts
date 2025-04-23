import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projeto } from './projeto/projeto.entity'; // Corrigido: Removido o .ts
import { ProjetoModule } from './projeto/projeto.module'; // Certifique-se de que o módulo está importado corretamente

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Ajuste com a senha do seu banco
      database: 'meu_banco', // Alterar para o nome do seu banco
      entities: [Projeto], // Certifique-se de que a entidade está aqui
      synchronize: true, // Em produção, mude para false para evitar problemas
    }),
    ProjetoModule, // Certifique-se de que o módulo do Projeto está aqui
  ],
})
export class AppModule {}
