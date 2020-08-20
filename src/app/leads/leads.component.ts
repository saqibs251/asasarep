import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  books = [
    {"name": "The Godfather", "price": 10, "author": "Mario Puzo"},
    {"name": "The Fellowship of the Ring", "price": 15, "author": "J.R.R. Tolkien"},
    {"name": "Harry Potter and the Deathly Hallows", "price": 20, "author": "J.K. Rowling  "},
    {"name": "book1", "price": 20, "author": "author1"}, 
    {"name": "book2", "price": 20, "author": "author2"}, 
    {"name": "book3", "price": 20, "author": "author3"}, 
    {"name": "book4", "price": 20, "author": "author4"}, 
    {"name": "book5", "price": 20, "author": "author5"}, 
    {"name": "book6", "price": 20, "author": "author6"}, 
    {"name": "book7", "price": 20, "author": "author7"}, 
    {"name": "book8", "price": 20, "author": "author8"}, 
    {"name": "book9", "price": 20, "author": "author9"}, 
    {"name": "book10", "price": 20, "author": "author10"}, 
    {"name": "book11", "price": 20, "author": "author11"}, 
    {"name": "book12", "price": 20, "author": "author12"},     
    {"name": "book13", "price": 20, "author": "author13"}, 
    {"name": "book14", "price": 20, "author": "author14"}, 
    {"name": "book15", "price": 20, "author": "author15"}, 
    {"name": "book16", "price": 20, "author": "author16"}, 
    {"name": "book17", "price": 20, "author": "author17"}, 
    {"name": "book18", "price": 20, "author": "author18"}, 
    {"name": "book19", "price": 20, "author": "author19"}, 
    {"name": "book20", "price": 20, "author": "author20"},
    {"name": "book1", "price": 20, "author": "author1"}, 
    {"name": "book2", "price": 20, "author": "author2"}, 
    {"name": "book3", "price": 20, "author": "author3"}, 
    {"name": "book4", "price": 20, "author": "author4"}, 
    {"name": "book5", "price": 20, "author": "author5"}, 
    {"name": "book6", "price": 20, "author": "author6"}, 
    {"name": "book7", "price": 20, "author": "author7"}, 
    {"name": "book8", "price": 20, "author": "author8"}, 
    {"name": "book9", "price": 20, "author": "author9"}, 
    {"name": "book10", "price": 20, "author": "author10"}, 
    {"name": "book11", "price": 20, "author": "author11"}, 
    {"name": "book12", "price": 20, "author": "author12"},     
    {"name": "book13", "price": 20, "author": "author13"}, 
    {"name": "book14", "price": 20, "author": "author14"}, 
    {"name": "book15", "price": 20, "author": "author15"}, 
    {"name": "book16", "price": 20, "author": "author16"}, 
    {"name": "book17", "price": 20, "author": "author17"}, 
    {"name": "book18", "price": 20, "author": "author18"}, 
    {"name": "book19", "price": 20, "author": "author19"}, 
    {"name": "book20", "price": 20, "author": "author20"},
    {"name": "book1", "price": 20, "author": "author1"}, 
    {"name": "book2", "price": 20, "author": "author2"}, 
    {"name": "book3", "price": 20, "author": "author3"}, 
    {"name": "book4", "price": 20, "author": "author4"}, 
    {"name": "book5", "price": 20, "author": "author5"}, 
    {"name": "book6", "price": 20, "author": "author6"}, 
    {"name": "book7", "price": 20, "author": "author7"}, 
    {"name": "book8", "price": 20, "author": "author8"}, 
    {"name": "book9", "price": 20, "author": "author9"}, 
    {"name": "book10", "price": 20, "author": "author10"}, 
    {"name": "book11", "price": 20, "author": "author11"}, 
    {"name": "book12", "price": 20, "author": "author12"},     
    {"name": "book13", "price": 20, "author": "author13"}, 
    {"name": "book14", "price": 20, "author": "author14"}, 
    {"name": "book15", "price": 20, "author": "author15"}, 
    {"name": "book16", "price": 20, "author": "author16"}, 
    {"name": "book17", "price": 20, "author": "author17"}, 
    {"name": "book18", "price": 20, "author": "author18"}, 
    {"name": "book19", "price": 20, "author": "author19"}, 
    {"name": "book20", "price": 20, "author": "author20"} 
  ]

  cols: any[];
  allAuthors: any[];
  totalRecords: number;


  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'author', header: 'Author' },
      { field: 'price', header: 'Price' }
    ];

    this.totalRecords = this.cols.length;

    this.allAuthors = [
      { label: 'All Authors', value: null },
      { label: 'Mario Puzo', value: 'Mario Puzo' },
      { label: 'J.R.R. Tolkien', value: 'J.R.R. Tolkien' },
      { label: 'J.K. Rowling', value: 'J.K. Rowling' },
      { label: 'author1', value: 'author1' },
      { label: 'author2', value: 'author2' },
      { label: 'author3', value: 'author3' },
      { label: 'author4', value: 'author4' },
      { label: 'author5', value: 'author5' },
      { label: 'author6', value: 'author6' },
      { label: 'author7', value: 'author7' },
      { label: 'author8', value: 'author8' },
      { label: 'author9', value: 'author9' },
      { label: 'author10', value: 'author10' },
    ];
    
  }


}
