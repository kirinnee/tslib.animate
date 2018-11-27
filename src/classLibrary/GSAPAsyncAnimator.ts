import {AnimationData, AsynchronousAnimator, SynchronousAnimator, TextAnimation} from "../index";

class GSAPAsyncAnimator implements AsynchronousAnimator {
	
	private readonly sync: SynchronousAnimator;
	
	constructor(syncAnimator: SynchronousAnimator) {
		this.sync = syncAnimator;
	}
	
	AnimateText(e: Element, text: string, data?: TextAnimation): Promise<Element> {
		return this.p("AnimateText", [text], e, data);
	}
	
	BackgroundColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element> {
		return this.p("BackgroundColor", [ori, to], e, data);
	}
	
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Blur", [ori, to], e, data);
	}
	
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Brightness", [ori, to], e, data);
	}
	
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Contrast", [ori, to], e, data);
	}
	
	FontColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element> {
		return this.p("FontColor", [ori, to], e, data);
	}
	
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Greyscale", [ori, to], e, data);
	}
	
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return this.p("H", [ori, to], e, data);
	}
	
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("HueRotation", [ori, to], e, data);
	}
	
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Invert", [ori, to], e, data);
	}
	
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Opacity", [ori, to], e, data);
	}
	
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Rotate", [ori, to], e, data);
	}
	
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Saturate", [ori, to], e, data);
	}
	
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("ScaleX", [ori, to], e, data);
	}
	
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("ScaleY", [ori, to], e, data);
	}
	
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("Sepia", [ori, to], e, data);
	}
	
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("SkewX", [ori, to], e, data);
	}
	
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element> {
		return this.p("SkewY", [ori, to], e, data);
	}
	
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return this.p("W", [ori, to], e, data);
	}
	
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return this.p("X", [ori, to], e, data);
	}
	
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element> {
		return this.p("Y", [ori, to], e, data);
	}
	
	Wait(e: Element, data?: AnimationData): Promise<Element> {
		return this.p("Wait", [], e, data);
	}
	
	BorderColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element> {
		return this.p('BorderColor', [ori, to], e, data);
	}
	
	BorderRadius(e: Element, ori: number | string, to: number | string, data?: AnimationData): Promise<Element> {
		return this.p('BorderRadius', [ori, to], e, data);
	}
	
	private p(type: string, args: any[], e: Element, data: AnimationData = {}) {
		return new Promise<Element>((resolve: (e: Element) => void) => {
			let original: Function = data.callback || (() => {});
			data.callback = () => {
				original();
				resolve(e);
			};
			let arg: any[] = [e].Add(args).Add(data as any);
			(this.sync as any)[type].apply(this.sync, arg);
		});
	}
	
	
}

export {GSAPAsyncAnimator};