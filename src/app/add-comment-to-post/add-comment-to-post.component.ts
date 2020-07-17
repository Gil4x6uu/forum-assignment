import { Component, OnInit, Inject } from '@angular/core';
import { AddPostDialogComponent } from '../add-post/add-post.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-add-comment-to-post',
  templateUrl: './add-comment-to-post.component.html',
  styleUrls: ['./add-comment-to-post.component.css']
})
export class AddCommentToPostComponent implements OnInit {
  addCommentToPostForm: FormGroup;
  newComment: Comment;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.addCommentToPostForm = this.formBuilder.group({
      message: ['', Validators.required],

    });
  }

  ngOnInit() {
  }
  
  save() {
    console.log("inside comment-save")
    this.newComment = new Comment(this.addCommentToPostForm.value);
    this.newComment.userName = localStorage.getItem("userName");
    this.newComment.date = new Date().toLocaleString();
    this.dialogRef.close(this.newComment);
  }

}
