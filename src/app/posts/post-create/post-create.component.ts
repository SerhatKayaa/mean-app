import { Component } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue = '';
  newPosts = 'No -Content';

  onAddPost(){
    this.newPosts = this.enteredValue;
  }
}
