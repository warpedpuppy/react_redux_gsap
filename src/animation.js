import {TweenLite, TweenMax} from 'gsap';


export default {
	
	hide(target) {
		return TweenLite.to(target, 1, { right:'-10px',height:0 })
	},
	staggerLeave(array, cb, dir) {

		for(let i = 0; i < array.length; i++){
			let item = array[i];

			if(dir === true){
				if(i < array.length-1){
					TweenMax.to(item, 0.5, {x:1000, opacity:0, delay: i * 0.2})
				} else {
					TweenMax.to(item, 0.5, {x:1000, opacity:0, delay: i * 0.2, onComplete:cb})
					dir = false;
				}

			} else {
				if(i < array.length-1){
					TweenMax.to(item, 0.5, {x:10, opacity:1, delay: i * 0.2})
				} else {
					TweenMax.to(item, 0.5, {x:10, opacity:1, delay: i * 0.2, onComplete:cb})
					dir = true;
				}
			}
			
		}

	}
}