import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material';
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
import { ItemsComponent } from './items/items.component'
import { ItemDetailComponent } from './items/item_detail.component'
import { ItemListComponent } from './items/items_list.component'
import { ProcessesComponent } from './processes/processes.component'
import { ProcessDropdownComponent } from './processes/process_dropdown.component'
import { ProcessesFlowComponent } from './processes/processes_flow.component'
import { TodosComponent } from './todos/todos.component'
import { TodoDetailComponent } from './todos/todo_detail/todo_detail.component'
import { TodoListComponent } from './todos/todo_list.component'
import { TodoTableComponent } from './todos/todo_table.component'
import { UserDropdownComponent } from './users/user_dropdown.component'
import { WineDetailComponent } from './wines/wine_detail.component'
import { WineDropdownComponent } from './wines/wine_dropdown.component'
import { WinesComponent } from './wines/wines.component'
import { WorkComponent } from './work/work.component'
import { WorkDetailComponent } from './work/work_detail.component'

import { TodoFilterPipe } from './pipes/todo-filter.pipe'
import { FilterPipe } from './pipes/filter.pipe'
import { OrderByPipe } from './pipes/orderBy.pipe'

import { AuthGuard } from './_guards/auth.guard'

import { AddressService } from './services/address.service'
import { AuthenticationService } from './services/auth.service'
import { ItemService } from './services/item.service'
import { MessageService } from './services/message.service'
import { PeopleService } from './services/people.service'
import { ProcessService } from './services/process.service'
import { TodoService } from './services/todo.service'
import { WineService } from './services/wine.service'
import { WorkService } from './services/work.service'

import { AppRoutingModule } from './routings/app_routing.module'
import { AuthenticatedRequest } from './shared/jwt-request';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    CommunicationComponent,
    poopComponent,
    HomeComponent,
    HomeBarComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemListComponent,
    ProcessesComponent,
    ProcessDropdownComponent,
    ProcessesFlowComponent,
    TodosComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoTableComponent,
    UserDropdownComponent,
    WineDetailComponent,
    WineDropdownComponent,
    WinesComponent,
    WorkComponent,
    WorkDetailComponent,
    // PIPES
    TodoFilterPipe,
    OrderByPipe,
    FilterPipe,
  ],
  providers: [
    // GUARDS
    AuthGuard,

    // SERVICES
    AddressService, 
    AuthenticationService,
    ItemService,
    MessageService, 
    PeopleService, 
    ProcessService,
    TodoService, 
    WineService,
    WorkService,
    {provide: RequestOptions, useClass: AuthenticatedRequest}],
  bootstrap: [AppComponent]
})
export class AppModule { }
