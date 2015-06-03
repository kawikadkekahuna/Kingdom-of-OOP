import Eukaryota from './Eukaryota';

export default class Bacteria extends Eukaryota{

	constructor(name,symmetry){
		super(name,false,false,true,true);
		this._symmetry = symmetry;
	}
//Accessor symmetry
set symmetry(val){

	this._symmetry = val;

}

get symmetry(){
	return this._symmetry;
}


}