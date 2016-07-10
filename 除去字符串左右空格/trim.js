/**
 * 
 * @authors Jesse (jessework131@163.com)
 * @date    2016-03-31 20:06:11
 * @version $Id$
 */
var string = " jesse ";
function trim(str){
	return str.replace(/(^\s*)||(\s*&)/g,"");
}
var result = trim(string);
console.log(string.length);
console.log(result);
console.log(result.length);
