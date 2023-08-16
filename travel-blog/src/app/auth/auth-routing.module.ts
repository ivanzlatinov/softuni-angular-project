import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { IsGuestGuard } from "../shared/guards/isGuest.guard";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [IsGuestGuard],
        data: { title: 'Register' }
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [IsGuestGuard],
        data: { title: 'Login' }
      },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }