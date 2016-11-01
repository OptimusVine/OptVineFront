import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import './rxjs-extensions'

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component'
import { CommunicationComponent } from './communication/communication.component'
import { poopComponent } from './poop/poop.component'
import { HomeComponent } from './home/home.component'
import { HomeBarComponent } from './home/home_bar.component'
import { ProcessesComponent } from './processes/processes.component'
import { ProcessDropdownComponent } from './processes/process_dropdown.component'
import { ProcessesFlowComponent } from './processes/processes_flow.component'
import { TodosComponent } from './todos/todos.component'
import { TodoDetailComponent } from './todos/todo_detail/todo_detail.component'
import { TodoListComponent } from './todos/todo_list.component'
import { UserDropdownComponent } from './users/user_dropdown.component'
import { WineDetailComponent } from './wines/wine_detail.component'
import { WineDropdownComponent } from './wines/wine_dropdown.component'
import { WinesComponent } from './wines/wines.component'

import { TodoFilterPipe } from './pipes/todo-filter.pipe'
import { OrderByPipe } from './pipes/orderBy.pipe'

import { AuthGuard } from './_guards/auth.guard'

import { AddressService } from './services/address.service'
import { AuthenticationService } from './services/auth.service'
import { MessageService } from './services/message.service'
import { PeopleService } from './services/people.service'
import { ProcessService } from './services/process.service'
import { TodoService } from './services/todo.service'
import { WineService } from './services/wine.service'

import { AppRoutingModule } from './routings/app_routing.module'
import { AuthenticatedRequest } from './shared/jwt-request';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    CommunicationComponent,
    poopComponent,
    HomeComponent,
    HomeBarComponent,
    ProcessesComponent,
    ProcessDropdownComponent,
    ProcessesFlowComponent,
    TodosComponent,
    TodoListComponent,
    TodoDetailComponent,
    UserDropdownComponent,
    WineDetailComponent,
    WineDropdownComponent,
    WinesComponent,
    // PIPES
    TodoFilterPipe,
    OrderByPipe
  ],
  providers: [
    // GUARDS
    AuthGuard,

    // SERVICES
    AddressService, 
    AuthenticationService,
    MessageService, 
    PeopleService, 
    ProcessService,
    TodoService, 
    WineService,
    {provide: RequestOptions, useClass: AuthenticatedRequest}],
  bootstrap: [AppComponent]
})
export class AppModule { }
