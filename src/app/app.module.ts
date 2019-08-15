import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDialogBtn } from './user/dialog/user-dialog';
import { UserDialogDialog } from './user/dialog/user-dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserDialogBtn,
    UserDialogDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [
    UserDialogDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
