import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';


/* Route */
import { RouterModule, Routes} from '@angular/router';
/* Route */


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'edit-listing/:id', component: EditListingComponent },
]


/* Firebase */
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from "app/services/firebase.service";
import { FlashMessagesModule } from "angular2-flash-messages/module";
/* Firebase */

export const firebaseConfig = {
  apiKey: "AIzaSyDp5YmRDjKzxTPa887DT4HbPScW92JX2PE",
  authDomain: "angular2-firebase-54b7d.firebaseapp.com",
  databaseURL: "https://angular2-firebase-54b7d.firebaseio.com",
  projectId: "angular2-firebase-54b7d",
  storageBucket: "angular2-firebase-54b7d.appspot.com",
  messagingSenderId: "309636681488"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};


@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponent,
    AddListingComponent,
    EditListingComponent,
    HomeComponent,
    ListingComponent,
    ListingsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
