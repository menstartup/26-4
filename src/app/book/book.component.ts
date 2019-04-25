import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  count = 0
  name = 'manh Nguyen'
  user = {
    name : 'manh Nguyen',
    age: 22,
    isMarried : true,

  }
  image = 'https://images.pexels.com/photos/2096700/pexels-photo-2096700.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  link = 'https://news.zing.vn/';
  textLink = 'go to zing MP3';
  imgWidth = 500;
  value = true;
  tbBorder = 0;
  isChecked = 0;
  xuat =''
  gender = 0

  constructor() { }

  ngOnInit() {
  }
    showInfo(){
      return`Ten: ${this.user['name']}`
    }

    onClick(){
      alert("helloooooo")
    }
    tang(){
      this.count ++
    }
    nhap(event){
      this.xuat = event.target.value
    }

}
