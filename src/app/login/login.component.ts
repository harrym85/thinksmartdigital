import {Component, OnInit, ViewChild} from '@angular/core';
import {Wizard} from "clarity-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("wizard") wizard: Wizard;
  @ViewChild("number") numberFi: any;

  model = {
    name: "",
    email: "",
    password: ""
  };
  ngOnInit() {
  }

}
