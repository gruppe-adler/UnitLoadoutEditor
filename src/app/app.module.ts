import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadoutService } from './loadout.service';
import { AddItemComponent } from './addItem.component';
import { EditItemComponent } from './editItem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoadoutService
  ],
  entryComponents: [
    AddItemComponent,
    EditItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
