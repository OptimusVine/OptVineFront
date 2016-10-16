import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions'

import { AppComponent } from './app.component';
import {  poopComponent } from './poop/poop.component'
import {  TodoDetailComponent } from './todos/todo_detail/todo_detail.component'
import { TodoListComponent } from './todos/todo_list.component'
import { HomeComponent } from './home/home.component'
import { TodoFilterPipe } from './pipes/todo-filter.pipe'


import { AddressService } from './services/address.service'
import { TodoService } from './services/todo.service'

import { AppRoutingModule } from './routings/app_routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    poopComponent,
    TodoListComponent,
    TodoDetailComponent,
    HomeComponent,
    TodoFilterPipe
  ],
  providers: [AddressService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
