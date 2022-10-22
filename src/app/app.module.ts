import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepeatDirective } from './repeat.directive';
import { BookRideComponent } from './book-ride/book-ride.component';
import { RidehoverDirective } from './ridehover.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RidefilterPipe } from './ridefilter.pipe';
import { CourselistComponent } from './courselist/courselist.component';
import { TimerComponent } from './timer/timer.component';
import { RidedetailsComponent } from './ridedetails/ridedetails.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { RideRegistrationComponent } from './ride-registration/ride-registration.component';
import { BookComponent } from './book/book.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepeatDirective,
    BookRideComponent,
    RidehoverDirective,
    RidefilterPipe,
    CourselistComponent,
    TimerComponent,
    RidedetailsComponent,
    RegistrationformComponent,
    RideRegistrationComponent,
    BookComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
