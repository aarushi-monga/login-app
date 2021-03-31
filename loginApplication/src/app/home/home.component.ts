import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public url: string |null='';

  constructor(private router: Router) {}

  ngOnInit(): void {}
 
  onLogout(){
    this.router.navigate(['/login']);
  }
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 

     reader.onload = (event) => { 
       this.url= <string>reader.result
      // console.log(reader.result);
      }
    }
  }
}



