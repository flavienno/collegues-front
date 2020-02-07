import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';



const ROUTES: Routes = [
  { path: 'page1', component: AccueilComponent  },
  { path: 'page2', component: RechercheCollegueParNomComponent },
  { path: 'page3', component: RechercheCollegueParNomComponent },
  { path: '', redirectTo: 'page1', pathMatch: 'full'}
];



@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponentComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
