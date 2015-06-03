import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing{

	constructor(name,uniCellular,asexual,mobile,heterotroph){
		super(name,uniCellular,true,false,asexual,mobile)
		this._heterotroph = heterotroph;
	}

//Accessor Heterotroph
get heterotroph(){
	return this._heterotroph;
}	

set heterotroph(val){
	this._heterotroph = val;
}

//Accessor Autotroph
get autotroph(){
	return !this._heterotroph;
}

set autotroph(val){

	this._heterotroph = !val;

}

}