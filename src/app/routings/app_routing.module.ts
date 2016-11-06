import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from '../home/home.component';
import { ProcessesComponent } from '../processes/processes.component'
import { TodosComponent }      from '../todos/todos.component';
import { TodoListComponent }      from '../todos/todo_list.component';
import { TodoDetailComponent }  from '../todos/todo_detail/todo_detail.component';
import { WinesComponent } from '../wines/wines.component'
import { WorkComponent } from '../work/work.component'
import { AdminComponent } from '../admin/admin.component'

import { AuthGuard } from '../_guards/auth.guard'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'todos/detail', component: TodoDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'wines', component: WinesComponent},
  { path: 'work', component: WorkComponent},
  { path: 'processes', component: ProcessesComponent},

  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}