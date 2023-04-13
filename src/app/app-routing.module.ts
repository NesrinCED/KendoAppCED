import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { SignupComponent } from './Modules/authentication/signup/signup.component';
import { HomeMenuComponent } from './Modules/admin/home-menu/home-menu.component';
import { ListProjectComponent } from './Modules/admin/home-menu/list-project/list-project.component';
import { AuthGaurdService } from './service/auth-gaurd-.service';
import { ListTemplatesEmployeeComponent } from './Modules/admin/home-menu/employee/list-templates-employee/list-templates-employee.component';
import { UpdateEmployeeComponent } from './Modules/admin/home-menu/employee/update-employee/update-employee.component';
import { AddTemplateComponent } from './Modules/admin/home-menu/template/add-template/add-template.component';
import { ListTemplateComponent } from './Modules/admin/home-menu/template/list-template/list-template.component';
import { UpdateTemplateComponent } from './Modules/admin/home-menu/template/update-template/update-template.component';
import { HomeComponent } from './Modules/admin/home-menu/home/home.component';
import { ImageUploadComponent } from './Modules/admin/home-menu/template/add-template/image-upload-add/image-upload.component';
import { ImageDialogComponent } from './Modules/admin/home-menu/template/add-template/image-dialog-add/image-dialog.component';

const routes: Routes =  [
/* {path: 'home', component:HomeMenuComponent,canActivate:[AuthGaurdService] ,children : [

  ]},*/  { path: 'admin',loadChildren:()=>import('./Modules/admin/admin.module')
  .then((m)=>m.AdminModule)},
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent},
  /*{ path: 'admin', component: HomeMenuComponent},
  { path: 'home', component: HomeComponent},
  { path: 'listTempEmp/:employeeId', component: ListTemplatesEmployeeComponent},//,canActivate:[AuthGaurdService] 
  { path: 'AddTemplate', component: AddTemplateComponent},
  { path: 'ListTemplate', component: ListTemplateComponent },
  { path: 'ListProject', component: ListProjectComponent },
  { path: 'ImageUpload', component: ImageUploadComponent },
  { path: 'ImageDialog', component: ImageDialogComponent },
  { path: 'UpdateTemplate/:templateId', component: UpdateTemplateComponent },
  { path: 'updateEmployee/:employeeId', component: UpdateEmployeeComponent },*/


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
