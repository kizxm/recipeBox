import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">

    <h1>Today's Date: {{month}}/{{day}}/{{year}}</h1>
    <br>
    <hr noshade>
    <div class="panel panel-warning">
      <div class="panel-heading"><h3> {{recipeFocus}} </h3></div>
      <div class="panel-body">
        <ul>
          <li *ngFor="let currentFood of food">{{currentFood.name}}
            <div class="well">
              <ul>

                <li >{{this.currentFood.ingredient}}</li>
                <li >{{this.currentFood.recipe}}</li>

              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="panel-footer">

      </div>
    </div>
    <hr noshade>
    <br>
    <hr>
    <ul>
    <li *ngFor="let currentFood of food">{{currentFood.name}} <button (click)="showRecipe()">more stuff!</button>
    </li>
    </ul>
    <div>
    <label>Enter Task Description:</label>
       <!-- <input [(ngModel)]="selectedRecipe.recipe"> -->
    </div>
  <!--  <div *ngIf="selectedRecipe">
    <h3> EDIT RECIPE </h3>
    <input [(ngModel)]="selectedRecipe.ingredient">
    <label> enter new stuff</label>
    <br>
 <input type="text" [(ngModel)]="selectedRecipe.priority" [text]="hello">1 (whatever)<br>
    <button (click)="finishedEditing()">done</button>

    </div>
    </div> -->
  </div>
  `
})

export class AppComponent {
  recipeFocus: string = 'All Recipes!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  food:Food[] = [
    new Food('Muffin', 'Flour, Egg, Butter, and Yeast', 'Mix together and put into muffin pan, then bake'),
    new Food('Donuts', 'Flour, Bacon, Chocolate, and Egg', 'Mix together and toss into the fire'),
    new Food('Cookie', 'Butter, more butter, Egg, a little more butter, and Sugar', 'Sacrifice first born to the dark lord')
  ];
  selectedRecipe: null;

showRecipe() {
  alert("clicky");
}

// isDone(clickedRecipe: Food) {
//   if(clickedRecipe.done === true) {
//     alert("NOT DONE");
//   } else {
//     alert("DONE");
//   }
}


// priorityColor(currentFood) {
//   if (currentFood.priority === 3) {
//     return "bg-danger";
//   } else if (currentFood.priority === 2) {
//     return "bg-warning";
//   } else {
//     return "bg-info";
//   }
// }

// finishedEditing() {
//   this.selectedRecipe = null;
// }
// }

export class Food {
  // public done: boolean = false;
  constructor(public name: string, public ingredient: string, public recipe: string){}
}
// ingredient:Ingredients[] = [
//   new Ingredients('Flour, Egg, Butter, and Yeast.'),
//   new Ingredients('Flour, Bacon, Chocolate, and Egg'),
//   new Ingredients('Butter, more butter, Egg, a little more butter, and Sugar')
// ];
// description:Descriptions[] = [
//   new Descriptions('Mix together and put into muffin pan, then bake.'),
//   new Descriptions('Mix together and toss into the fire'),
//   new Descriptions('Sacrifice first born to the dark lord')
// ];
