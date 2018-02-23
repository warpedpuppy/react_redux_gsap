import {TweenLite} from 'gsap';


export default {
	
	hide(target) {
		console.log('hide ', target)
		return TweenLite.to(target, 1, { right:'-10px',height:0 })
	}



}