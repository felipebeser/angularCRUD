import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();
  }

  listarTodos(): Funcionario[]{
    return this.funcionarioService.listarTodos();
  }

  remover($event:any, funcionario: Funcionario): void {
    $event.preventDefault();
    if(confirm("Deseja remover o funcionário " + funcionario.nome + " ?"))
      this.funcionarioService.remover(funcionario.id)
      this.funcionarios = this.funcionarioService.listarTodos();
  }
}
