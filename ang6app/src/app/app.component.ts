import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  video : string = 'Hi Guys';
  like:string = 'By Guys';

  firstname:string='Trinath';

  lastname:string='Dalai';

  multiplengStyele={
  	'color':'red',
  	'text-decoration':'none'
  }

  ngclassmultiple = {
	'text-white':true,
	'bg-danger':true,
	'italicfont':true,
	'btn':true,
	'ml-2':true
	}


  biodata = {
  	name: "Trinath Dalai",
  	born:new Date(1956,5,5),
  	desig:"UI Designer",
  	slry:100000
  }


  email3 = "dtrinathdalai@gmail.com";

  getEmail3(){
  	console.log(this.email3);
  }

  getEmail($event){
  	console.log($event.target.value);
  }

  getEmail2(email){
  	console.log(email);
  }

  coloreChange:string="red"

  colorChange2:boolean=false;


  multipleclassChange:string="color-red bg-black"
  singleclassTruefalse:boolean=true;

  isHidden:boolean=false;

  isDisable:boolean=true;

  isActive:boolean=false;

  evntbndTxt:string='';

  evntbndClick(){

  	console.log('This txt is coming from Event binding method');
  	this.evntbndTxt="Trinath Dalai .. This txt is coming from Event binding method"
  }

  evntClick(event){
  	console.log(event.target.value);
  }

  textpropname:string='Interpolition';

  myfullname():string{
  	return this.firstname +" "+ this.lastname;
  }

}
