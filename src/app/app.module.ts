import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JoditAngularModule } from 'jodit-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post/add-post.component';




@NgModule({
   declarations: [
      AppComponent,
      AddPostDialogComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      JoditAngularModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatCardModule,
      FormsModule,
      MatDialogModule
   ],
  entryComponents: [
     AddPostDialogComponent
  ],
  providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
