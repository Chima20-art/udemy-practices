import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'udemy-practicec';
  userName?: string;
  valid:boolean = false;
   onUsenameChange(){
      if( this.userName != ''){
        this.valid = true;
      }
  }

  onSave (){
     this.userName = '';
  }

  ngOnInit(): void {

  }

}
