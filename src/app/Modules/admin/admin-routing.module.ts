import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeComponent } from './home-menu/home/home.component';
import { ListProjectComponent } from './home-menu/list-project/list-project.component';
import { ListTemplateComponent } from './home-menu/template/list-template/list-template.component';
import { ListEmployeeComponent } from './home-menu/employee/list-employee/list-employee.component';
import { ListTemplatesEmployeeComponent } from './home-menu/employee/list-templates-employee/list-templates-employee.component';
import { AddTemplateComponent } from './home-menu/template/add-template/add-template.component';
import { UpdateEmployeeComponent } from './home-menu/employee/update-employee/update-employee.component';
import { UpdateTemplateComponent } from './home-menu/template/update-template/update-template.component';
import { TestTemplateComponent } from './home-menu/test-template/test-template.component';
import { SendEmailComponent } from './home-menu/test-template/send-email/send-email.component';
import { GeneratePdfComponent } from './home-menu/test-template/generate-pdf/generate-pdf.component';



const routes: Routes =  [
  { path: '', component: HomeMenuComponent, 
    children: [
      {path: '', redirectTo: 'Home', pathMatch: 'full' },
      {path: 'Home', component: HomeComponent },
      {path: 'Developers', component: ListEmployeeComponent },
      {path: 'Projects', component: ListProjectComponent },
      {path: 'AllTemplates',component: ListTemplateComponent},
      {path: 'AllTemplates/UpdateTemplate/:id',component: UpdateTemplateComponent},
      {path: 'MyTemplates', component: ListTemplatesEmployeeComponent },
      {path: 'AddTemplate',component: AddTemplateComponent},
      {path: 'TestTemplate',component: TestTemplateComponent},
      {path: 'TestTemplate/SendEmail',component: SendEmailComponent},
      {path: 'TestTemplate/GeneratePDF',component: GeneratePdfComponent},
      {path: 'Settings',component: UpdateEmployeeComponent},

    ]
  }
];
/*,
      children: [
        {path: 'UpdateTemplate/:id',component: UpdateTemplateComponent},
      ]*/

  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    //imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule { }
