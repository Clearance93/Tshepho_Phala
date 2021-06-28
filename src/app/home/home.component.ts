import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidateList: any;

  pic1: string = "assets/images/images (1).jpg";
  pic2: string = "assets/images/gadgets.png";
  pic3: string = "assets/images/ICT.png";
  pic: string = "assets/images/full.gif";
  pic4: string = "assets/images/bootstrap-themes.png";
  pic5: string = "assets/images/high tech brain.jpg";


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:7000/candidates').subscribe(result => {
      this.candidateList = result;
      console.log(this.candidateList);
    }, error => {
      console.error(error);
    })
  }

}
2