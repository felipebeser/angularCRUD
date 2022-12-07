import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionario } from '../funcionario/funcionario.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router'
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) { }
  @ViewChild('formFuncionario', {static: true}) formFuncionario: NgForm;
  funcionario: Funcionario;

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.funcionario = this.funcionarioService.buscarPorId(id);
  }

  atualizar(): void {
    if(this.formFuncionario.form.valid){
      this.funcionarioService.atualizar(this.funcionario);
      this.router.navigate(['/funcionarios']);
    }
  }

}
