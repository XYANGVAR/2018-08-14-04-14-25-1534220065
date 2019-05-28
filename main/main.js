function rtrim(str){
		return str.replace(/(\s*$)/g,'')
	}
module.exports = function main(actual) {
    console.log("Debug Info");

	
	var one = new Array()
	one[0] = '._.'
	one[1] = '...'
	var two = new Array()
	two[0] = '|.|'
	two[1] = '..|'
	two[2] = '._|'
	two[3] = '|_|'
	two[4] = '|_.'
	var three = new Array()
	three[0] = '|_|'
	three[1] = '..|'
	three[2] = '|_.'
	three[3] = '._|'
	
	one_str = ''
	two_str = ''
	three_str = ''
	for(i=0;i<actual.length;i++){
			if('02356789'.includes(actual[i]))
			one_str += (one[0])
			else if('14'.includes(actual[i]))
			one_str += (one[1])
			
			if('0' == actual[i])
			two_str += (two[0])
			else if('17'.includes(actual[i]))
			two_str += (two[1])
			else if('23'.includes(actual[i]))
			two_str += (two[2])
			else if('489'.includes(actual[i]))
			two_str += (two[3])
			else if('56'.includes(actual[i]))
			two_str += (two[4])
			
			if('068'.includes(actual[i]))
			three_str += (three[0])
			else if('1479'.includes(actual[i]))
			three_str += (three[1])
			else if('2'.includes(actual[i]))
			three_str += (three[2])
			else if('35'.includes(actual[i]))
			three_str += (three[3])
		    one_str += ' '
		    two_str += ' '
			three_str += ' '

	}
	//one_str.trim()
	//two_str.trim()
//	three_str.trim()
    one_str = rtrim(one_str)
	two_str = rtrim(two_str)
	three_str = rtrim(three_str)

	 return one_str+'\n'+two_str+'\n'+three_str+'\n'


	
    
};