import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


// @NgModule({  declarations: [
//   AppComponent,
//   PostListComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule
//     // import de HttpModule
//     ],  providers: [],
//     bootstrap: [AppComponent]
//   })
//   export class AppModule { }
