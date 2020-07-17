import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../models/post';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostDialogComponent implements OnInit {
  addPostForm: FormGroup;
  newPost: Post;
  
  constructor(
    private formBuilder: FormBuilder, 
    private dialogRef: MatDialogRef<AddPostDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) data
    ) {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
   }

  ngOnInit() {
  }
  save(){
    console.log("inside on submit")
    this.newPost = new Post(this.addPostForm.value);
    this.newPost.userName = localStorage.getItem("userName");
    this.newPost.date = new Date().toLocaleString();
    this.newPost.comments = []; 
    this.dialogRef.close(this.newPost);
  }
}
