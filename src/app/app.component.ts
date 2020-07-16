import { Component, OnInit } from '@angular/core';
import {Post} from './models/post';
import { Comment } from './models/Comment';
import {PostsService} from './posts.service';
//import { Jodit } from 'jodit-angular';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public posts :  Post[] = [];
 // public editor = new Jodit("#editor");
  public commentForm: FormGroup; 
  
constructor(private postService: PostsService){
   this.commentForm = new FormGroup({
     message: new FormControl(''),
  });
}
  ngOnInit() {
      this.postService.getAllPosts()
      .subscribe(posts => { this.posts = posts
      });

  }
 // editorValueChanged(editor) {
    //editor.value = "somefunnytext"
  //  console.log(editor.value);
  //}
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.commentForm.value);
  }

}
