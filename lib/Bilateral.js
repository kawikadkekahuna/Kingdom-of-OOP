import Animal from './Animal';

export default class Bilateral extends Animal{

	constructor(name,body){
		super(name,'bilateral',body);
		this._body = body;
	}

//Accessor body
set body(val){

	this._body = val;

}

get body(){

	return this._body;

}

}