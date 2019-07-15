import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  { path: '', component: TemplateComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'data', component: DataComponent },
  { path: '**', component: TemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


