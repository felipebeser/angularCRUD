import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarTodos(): Funcionario[]{
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  cadastrar(funcionario: Funcionario): void{
    const funcionarios = this.listarTodos();
    funcionario.id = new Date().getTime();
    funcionarios.push(funcionario);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  buscarPorId(id:number): Funcionario {
    const funcionarios: Funcionario[] = this.listarTodos();
    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizar(funcionario: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarTodos();
    funcionarios.forEach((func, pos, funcs) => {
      if(funcionario.id === func.id){
        funcs[pos] = funcionario;
      }
    });
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  remover(id:number): void{
    let funcionarios: Funcionario[] = this.listarTodos();
    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }
}
