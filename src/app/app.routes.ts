import { Routes } from "@angular/router";
import { CadastrarFuncionarioComponent } from "./cadastrar-funcionario/cadastrar-funcionario.component";
import { EditarFuncionarioComponent } from "./editar-funcionario/editar-funcionario.component";
import { ListarFuncionarioComponent } from "./listar-funcionario/listar-funcionario.component";


export const ROUTERS: Routes = [
  {
    path: 'funcionarios/listar',
    component: ListarFuncionarioComponent
  },
  {
    path: 'funcionarios',
    redirectTo: 'funcionarios/listar'
  },
  {
    path: '',
    redirectTo: 'funcionarios/listar',
    pathMatch: 'full'
  },
  {
    path: 'funcionarios/cadastrar',
    component: CadastrarFuncionarioComponent
  },
  {
    path: 'funcionarios/editar/:id',
    component: EditarFuncionarioComponent
  }
]