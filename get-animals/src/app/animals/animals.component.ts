import { Component, OnInit } from '@angular/core';
import { BreedsService } from '../service/breeds.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  allBreed: any = []

  constructor(private breeds:BreedsService) { }

  ngOnInit(): void {
    this.getAllBreeds()
  }


  getAllBreeds(){
    this.breeds.getBreeds()
    .subscribe((response: any) => {
      console.table(response)
      this.allBreed.push(...response)
    })
  }

}
