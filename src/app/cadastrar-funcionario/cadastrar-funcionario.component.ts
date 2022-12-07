import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario/funcionario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

  @ViewChild('formFuncionario') formFuncionario: NgForm;
  funcionario: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
  }

  cadastrar(): void{
    if(this.formFuncionario.form.valid){
      this.funcionarioService.cadastrar(this.funcionario);
      this.router.navigate(["/funcionarios"]);
    }
  }

}
