import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
 { path:'template' , component: TemplateFormComponent},
 { path:'reactive' , component: ReactiveFormComponent},
 { path:'observable' , component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
