import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from '../home/home.component';
import { TodosComponent }      from '../todos/todos.component';
import { TodoListComponent }      from '../todos/todo_list.component';
import { TodoDetailComponent }  from '../todos/todo_detail/todo_detail.component';
import { AdminComponent } from '../admin/admin.component'


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'todos/detail', component: TodoDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },

  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}