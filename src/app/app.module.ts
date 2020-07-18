import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JoditAngularModule } from 'jodit-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post/add-post.component';
import { AddCommentToPostComponent } from './add-comment-to-post/add-comment-to-post.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';







@NgModule({
   declarations: [
      AppComponent,
      AddPostDialogComponent,
      AddCommentToPostComponent
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
      MatDialogModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule
   ],
   entryComponents: [
      AddPostDialogComponent,
      AddCommentToPostComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
