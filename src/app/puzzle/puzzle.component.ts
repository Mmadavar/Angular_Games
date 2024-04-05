
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkDropListGroup, DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";


@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [
    CdkDropList, CdkDrag, CommonModule, DragDropModule, CdkDropListGroup
  ],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent {
  puzzle1: number[] = [4,2,8,3];
  puzzle2: number[] = [1,5,7,21];
  puzzle3: number[] = [15, 6, 9, 10];
  puzzle4: number[] = [11,12,13,14];

  ngOnInit() {
    this.shuffle(this.puzzle1);
    this.shuffle(this.puzzle2);
    this.shuffle(this.puzzle3);
    this.shuffle(this.puzzle4);
  }

  shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]

    }
  }




  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      if (event.container.data[event.previousIndex] === 21 || event.container.data[event.currentIndex] === 21)
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if ((event.previousIndex==event.currentIndex) && (event.previousContainer.data[event.previousIndex]===21 || event.container.data[event.currentIndex]===21)){
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        transferArrayItem(event.container.data, event.previousContainer.data, event.currentIndex+1, event.previousIndex);
      }
    }
  }
}





