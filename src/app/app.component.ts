import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from './models/post';
import { PostsService } from './posts.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post/add-post.component';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public posts: Post[] = [];
  public userName: string;
  public enterForum: boolean = false;
  public commentForm: FormGroup;
  constructor(
    private postService: PostsService, 
    public addPostDialog: MatDialog, 
    private sanitizer: DomSanitizer) {
    this.commentForm = new FormGroup({
      message: new FormControl(''),
    });
  }
  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
    if (localStorage.getItem('userName') !== null) {
      this.enterForum = true;
      this.userName = localStorage.getItem('userName');
    }
  }
  updateName(): void {
    if (this.userName !== "") {
      localStorage.setItem('userName', this.userName);
      this.enterForum = true;
    }
    else {

    }
  }
  openAddPostsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.addPostDialog.open(AddPostDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(data => {
        if (data === undefined) {

        }
        else {
          console.log(data);
          this.postService.addPostToForum(data)
            .subscribe(posts => {
              this.posts = posts
            })
        }

      });
  }
  
   sanitizeMessage(postBody: string){
    return this.sanitizer.bypassSecurityTrustHtml(postBody);
  }
  
}
