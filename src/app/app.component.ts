import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlgorithmsService} from "./algorithms.service";
import {FormsModule} from "@angular/forms";
import {filter} from "rxjs";
import {Algorithms} from '../ts/algorithm'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  final: boolean = false;
  justify: string = 'end';
  constructor(public algorithmService: AlgorithmsService) { }
  velocity: number = 100;
  numberOfNumbers: number = 30;
  execute() {
    this.algorithmService.velocity = this.velocity;
    this.algorithmService.execute(Algorithms.Bubble, () => this.final = true)
  }
  generate() {
    this.final = false;
    this.algorithmService.generate(this.numberOfNumbers);
  }

}
