import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from '../home/home.component';
import { TodoListComponent }      from '../todos/todo_list.component';
import { TodoDetailComponent }  from '../todos/todo_detail/todo_detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail', component: TodoDetailComponent },
  { path: 'list', component: TodoListComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}