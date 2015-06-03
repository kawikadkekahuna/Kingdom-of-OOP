
export default class LivingThing{
	constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){

	this._name = name;
	this._uniCellular = uniCellular;
	this._trueNucleus = trueNucleus;
	this._anaerobic = anaerobic;
	this._asexual = asexual;
	this._mobile = mobile;
	}

	//Accessor Name
	set name(name){
		if ( typeof(name) !== 'string'){
				throw new TypeError('name should be a string');
		}else {
			this._name = name;
		}
	}
	get name(){
		return this._name;
	}

	//Accessor uniCellular
	set uniCellular(val){
		if( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be a boolean');
		}else{
			this._uniCellular = val;
		}
	}
	get uniCellular(){
		return this._uniCellular;
	}
	//Acessor multiCellular
	set multiCellular(val){
		if ( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be boolean');
		}else{
				if(val === true){
					this._uniCellular = false;
				}else{
					this._uniCellular = true;
				}

		}
	}

	get multiCellular(){
		if(this._uniCellular === true){
			return false;
		}else{
			return true;
		}
				
	}

	//Accessor trueNucleus
	set trueNucleus(val){
		if( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be a boolean');
		}else{
			this._trueNucleus = val;
		}		
	}
	get trueNucleus(){
		return this._trueNucleus;
	}
	//Accessor Eukaryote
	set eukaryote(val){
		this._trueNucleus = val;
	}

	get eukaryote(){
		if(this._trueNucleus === true){
				return true;
			}else{
				return false;
			}		
	}
	//Accessor prokaryote
	set prokaryote(val){

		if(this._trueNucleus === val){
			this._trueNucleus = !val;
		}

	}
	get prokaryote(){
		if(this._trueNucleus === true){
			return false;
		}else{
			return true;
		}

	}
	//Accessor anaerobic
	set anaerobic(val){
		if( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be a boolean');
		}else{
			this._anaerobic = val;
		}		
	}
	get anaerobic(){
		return this._anaerobic;
	}	

	//Accessor aerobic
	set aerobic(val){
		this._anaerobic = !val;
	}
	get aerobic(){
		return !this._anaerobic;
	}

	//Accessor asexual
	set asexual(val){
		if( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be a boolean');
		}else{
			this._asexual = val;
		}		
	}
	get asexual(){
		return this._asexual;
	}

	//Accessor sexual
	set sexual(val){

		this._asexual = !val;

	}
	get sexual(){
		return !this._asexual;
	}

	//Accessor mobile
	set mobile(val){
		if( typeof(val) !== 'boolean'){
			throw new TypeError('argument should be a boolean');
		}else{
			this._mobile = val;
		}		
	}
	get mobile(){
		return this._mobile;
	}
	//Accessor immobile
	set immobile(val){
		this._mobile = !val;
	}

	get immobile(){
		return !this._mobile;
	}
}