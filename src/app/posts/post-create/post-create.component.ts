import { Component } from '@angular/core';
 // import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})

export class PostCreateComponent {
  enteredValue = '';
  newPost = 'No content';
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
