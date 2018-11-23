import {AnimationData, AsynchronousAnimator, SynchronousAnimator, TextAnimation} from "../index";

class GSAPAsyncAnimator implements AsynchronousAnimator {
	
	private readonly sync: SynchronousAnimator;
	
	constructor(syncAnimator: SynchronousAnimator) {
		this.sync = syncAnimator;
	}
	
	AnimateText(e: Element, text: string, data?: TextAnimation): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: TextAnimation = this.t(data, e, resolve) as TextAnimation;
			this.sync.AnimateText(e, text, newData);
		});
	}
	
	BackgroundColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.BackgroundColor(e, ori, to, newData);
		});
	}
	
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Blur(e, ori, to, newData);
		});
	}
	
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Brightness(e, ori, to, newData);
		});
	}
	
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Contrast(e, ori, to, newData);
		});
	}
	
	FontColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.FontColor(e, ori, to, newData);
		});
	}
	
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Greyscale(e, ori, to, newData);
		});
	}
	
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.H(e, ori, to, newData);
		});
	}
	
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.HueRotation(e, ori, to, newData);
		});
	}
	
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Invert(e, ori, to, newData);
		});
	}
	
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Opacity(e, ori, to, newData);
		});
	}
	
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Rotate(e, ori, to, newData);
		});
	}
	
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Saturate(e, ori, to, newData);
		});
	}
	
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.ScaleX(e, ori, to, newData);
		});
	}
	
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.ScaleY(e, ori, to, newData);
		});
	}
	
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Sepia(e, ori, to, newData);
		});
	}
	
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.SkewX(e, ori, to, newData);
		});
	}
	
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.SkewY(e, ori, to, newData);
		});
	}
	
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.W(e, ori, to, newData);
		});
	}
	
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.X(e, ori, to, newData);
		});
	}
	
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let newData: AnimationData = this.t(data, e, resolve) as AnimationData;
			this.sync.Y(e, ori, to, newData);
		});
	}
	
	private t(data: AnimationData = {}, e: Element, r: (e: Element) => void): AnimationData {
		
		let original: Function = data.callback || (() => {});
		data.callback = () => {
			original();
			r(e);
		};
		return data;
	}
}

export {GSAPAsyncAnimator};