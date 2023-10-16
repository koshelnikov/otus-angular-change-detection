import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { UserPreviewComponent } from './components/users/user-preview/user-preview.component';
import {BooksComponent} from "./components/books/books.component";
import { ZonejsComponent } from './components/zonejs/zonejs.component';
import { ChangeDetectorRefComponent } from './components/change-detector-ref/change-detector-ref.component';
import { AsyncComponent } from './components/async/async.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BooksComponent,
    UserComponent,
    UserPreviewComponent,
    ZonejsComponent,
    ChangeDetectorRefComponent,
    AsyncComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
