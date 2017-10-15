/* 小米明星单品滑动轮播 */
function move( obj, dir, target ){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = parseInt(getStyle(obj, 'marginLeft')) + dir;
		if(speed > target && dir > 0){
			speed = target;
		}
		if(speed < target && dir < 0){
			speed = target;
		}
		obj.style.marginLeft = speed + 'px';
		if(speed == target){
			clearInterval(obj.timer);
		}
	},1000);
}
function getStyle(obj , attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

