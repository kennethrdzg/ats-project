import { Component } from '@angular/core';
import { Postcard } from '../interfaces/postcard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  postcardsData: Postcard[] = [
    {
      name: "Beach", imageUrl: 'assets/beach.jpg', title: "In the Beach", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "travel"
    },
    {
      name: "Office", imageUrl: "assets/business.jpg", title: "Balanced Life", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "business"
    },
    {
      name: "Food", imageUrl: "assets/food.avif", title: "New Discoveries", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "food"
    },
    {
      name: "Mountain", imageUrl: "assets/mountain.webp", title: "Beautiful Nature", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "travel"
    },
    {
      name: "Waterfall", imageUrl: "assets/waterfall.jpeg", title: "Waterfall", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "lifestyle"
    },
    {
      name: "Cabin", imageUrl: "assets/winter_cabin.jpg", title: "Cozy Winter", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur dictum sapien, vel tincidunt elit eleifend quis. Nulla facilisi. Morbi ornare maximus odio, eu ullamcorper velit dictum vehicula. Quisque id pellentesque arcu. Duis blandit accumsan dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", category: "lifestyle"
    },
  ];

  postcards: Postcard[] = [];

  category: string = "";

  title: string = "asd";

  content: string = "";

  ngOnInit(){
    this.postcards = [];
    for(let postcard of this.postcardsData){
      this.postcards.push(postcard);
    }
  }

  filterPostals(cat: string){
    this.category = cat;
    this.postcards = [];

    for(let postcard of this.postcardsData){
      if(this.category == "" || this.category == postcard.category){
        this.postcards.push(postcard)
      }
    }
  }

  openEditModal(idx: number){
    this.title = this.postcards[idx].title;
    console.log(this.postcards[idx].message)
    this.content = this.postcards[idx].message;
  }

  editPostcard(idx: number){
    this.postcards[idx].title = this.title;
    this.postcards[idx].message = this.content;
  }
}
