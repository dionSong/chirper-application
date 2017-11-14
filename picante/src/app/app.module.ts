//Services
import { ChilisService } from "./services/chilis.service";
import { Http } from "@angular/http";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared.module';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';


// Personal Components
import { SingleComponent } from './components/single/single.component';
import { ChilisComponent} from './components/chilis/chilis.component';
import { ChiliFormComponent } from './components/chili-form/chili-form.component';

const appRoutes: Routes = [
  {
    path: 'chilis',
    component: ChilisComponent
  },

  // {
  //   path: 'chilis/:id'
  // }

]

@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    ChilisComponent,
    ChiliFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ChilisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
