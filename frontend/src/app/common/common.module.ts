import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { ContactComponent } from "./contact/contact.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'index',
    component: IndexComponent
  }
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ContactComponent, IndexComponent],
  exports: [RouterModule]
})
export default class CommonModule { }
