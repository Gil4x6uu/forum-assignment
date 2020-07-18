import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostsService } from './posts.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post/add-post.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AddCommentToPostComponent } from './add-comment-to-post/add-comment-to-post.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public posts: Post[] = [];
  public userName: string;
  public isUserSignIn: boolean = false;

  constructor(
    private postService: PostsService, 
    public dialog: MatDialog,
    private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
    if (localStorage.getItem('userName') !== null) {
      this.isUserSignIn = true;
      this.userName = localStorage.getItem('userName');
    }
  }
  updateUserName(): void {
    if (this.userName !== "") {
      localStorage.setItem('userName', this.userName);
      this.isUserSignIn = true;
    }
    else {

    }
  }
  openAddPostsDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddPostDialogComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(post => {
        if (post === undefined) {

        }
        else {
          console.log(post);
          this.postService.addPostToForum(post)
            .subscribe(posts => {
              this.posts = posts
            })
        }

      });
  }
  openAddCommentToPostDialog(postId: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(AddCommentToPostComponent, dialogConfig);
    dialogRef.afterClosed()
      .subscribe(comment => {
        if (comment === undefined) {

        }
        else {
          comment.post_id = postId;
          console.log(`comment=>${comment}`);
          this.postService.addCommentToPost(comment)
            .subscribe(posts => {
              this.posts = posts
            })
        }

      });
  }

  logOut():void{
    localStorage.clear();
    this.userName = "";
    this.isUserSignIn = false;
    
    
  }
   sanitizeMessage(postBody: string){
    return this.sanitizer.bypassSecurityTrustHtml(postBody);
  }
  
}
