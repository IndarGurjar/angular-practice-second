import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA,} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ObservableComponent } from './observable/observable.component';
import { LoginFormComponent } from './login/login-form/login-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormControlComponent,
    ObservableComponent,
     LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule, ReactiveFormsModule , 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
