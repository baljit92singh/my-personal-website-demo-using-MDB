import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from 'ng2-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { MyIntroComponent } from './my-intro/my-intro.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { ContactComponent } from './contact/contact.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({

  declarations: [
    AppComponent,
    MyIntroComponent,
    MyAboutComponent,
    MyProjectsComponent,
    MyBlogComponent,
    ContactComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    // FlexLayoutModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }