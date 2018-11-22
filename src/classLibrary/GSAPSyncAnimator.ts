import {AnimationData, SynchronousAnimator, TextAnimation} from "../index";
import {
	DefaultAnimationData, DefaultTextAnimationData, ParseAnimationData, ParseTextAnimationData
} from "./InternalDataTypes";
import {EaseFactory} from "@kirinnee/kease";
import {Core} from "@kirinnee/core";
import {ElementFactory} from "@kirinnee/elefact";
import {DOMEx} from "@kirinnee/domex";

type Appendable = Element | string;

class GSAPSyncAnimator implements SynchronousAnimator {
	
	private readonly namespace: string;
	private readonly TweenLite: any;
	private readonly easeFactory: EaseFactory;
	private readonly eleFactory: ElementFactory;
	private readonly core: Core;
	
	constructor(namespace: string, TweenLite: any, easeFactory: EaseFactory, eleFact: ElementFactory, domex: DOMEx, core: Core) {
		core.AssertExtend();
		domex.AssertExtend();
		this.namespace = namespace;
		this.TweenLite = TweenLite;
		this.easeFactory = easeFactory;
		this.eleFactory = eleFact;
		this.core = core;
	}
	
	get Namespace(): string {
		return this.namespace;
	}
	
	AnimateText(e: Element, text: string, data: TextAnimation = {}): Element {
		let d: DefaultTextAnimationData = ParseTextAnimationData(data, this.easeFactory);
		
		let span = this.eleFactory.SPAN().Style('color', d.color)
			.Style('font-weight', d.bold ? "900" : "400")
			.Style('font-style', d.italics ? 'oblique' : 'none')
			.Style('text-decoration', d.underline ? 'underline' : 'none');
		
		let elements: Appendable[] = ["<br>", span];
		if (!d.newLine) elements = elements.Skip(1);
		if (!d.append) e.innerHTML = "";
		e.Append(elements);
		this.TweenLite.to(span, d.duration, {
			text: text, immediateRender: true, ease: d.ease, onComplete: d.callback
		});
		return e;
	}
	
	BackgroundColor(e: Element, ori: string, to: string, data ?: AnimationData): Element {
		return this.a(e, 'backgroundColor', ori, to, data);
	}
	
	Blur(e: Element, ori: number, to: number, data: AnimationData): Element {
		let target: Element = this.is(e) ? e.querySelector('feGaussianBlur')! : e;
		let ele: any = e as any;
		let update = this.is(e) ? () => target.Attr('stdDeviation', ele.SecretFilterData.blur) : () => {
			let n: string = `blur(${ele.SecretFilterData.blur}px)`;
			target.Style('filter', n).Style('-webkit-filter', n);
		};
		return this.af(e, "blur", ori.toString(), to.toString(), update, data);
		
	}
	
	Brightness(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		let target: Element = this.is(e) ? e.querySelector('feGaussianBlur')! : e;
		let ele: any = e as any;
		let update = this.is(e) ? () => target.Attr('stdDeviation', ele.SecretFilterData.blur) : () => {
			let n: string = `blur(${ele.SecretFilterData.blur}px)`;
			target.Style('filter', n);
			target.Style('-webkit-filter', n);
		};
		return this.af(e, "blur", ori.toString(), to.toString(), update, data);
	}
	
	Contrast(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		let $ = (q: string): Element => e.querySelector(q)!;
		let target: Element[] = this.is(e) ? [$('.contrast-filter feFuncR'), $('.contrast-filter feFuncG'), $('.contrast-filter feFuncB')] : [e];
		let ele: any = e as any;
		let update = this.is(e) ? () => {
			let contrast: number = ele.SecretFilterData.contrast;
			let val: string = `${0.5 - 0.5 * contrast}`;
			target.Each(s => s.Attr('slope', `${contrast}`).Attr('intercept', val));
		} : () => {
			let n: string = `contrast(${ele.SecretFilterData.contrast * 100}%)`;
			target.Each(s => s.Style('filter', n).Style('-webkit-filter', n));
		};
		return this.af(e, "contrast", ori.toString(), to.toString(), update, data);
	}
	
	FontColor(e: Element, ori: string, to: string, data ?: AnimationData): Element {
		return this.a(e, 'color', ori, to, data);
	}
	
	Greyscale(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		let target: Element = this.is(e) ? e.querySelector(".grayscale-filter")! : e;
		let ele: any = e;
		let update = this.is(e) ? () => {
			let gs: number = ele.SecretFilterData.grayscale;
			target.Attr('values', `${0.2126 + 0.7874 * (1 - gs)} ${0.7152 - 0.7152 * (1 - gs)} ${0.0722 - 0.0722 * (1 - gs)} 0 0
	                 ${0.2126 - 0.2126 * (1 - gs)} ${0.7152 + 0.2848 * (1 - gs)} ${0.0722 - 0.0722 * (1 - gs)} 0 0
	                 ${0.2126 - 0.2126 * (1 - gs)} ${0.7152 - 0.7152 * (1 - gs)} ${0.0722 + 0.9278 * (1 - gs)} 0 0
	                 0 0 0 1 0`)
		} : () => {
			let gray: string = `grayscale(${ele.SecretFilterData.grayscale * 100}%)`;
			ele.Css('filter', gray).Css('-webkit-filter', gray);
		};
		return this.af(e, "grayscale", ori.toString(), to.toString(), update, data);
	}
	
	H(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'height', this.ts(ori), this.ts(to), data);
	}
	
	HueRotation(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		
		let target: Element = this.is(e) ? e.querySelector('.hue-rotate-filter')! : e;
		let ele: any = e;
		let update = this.is(e) ? () => target.Attr('values', `${ele.SecretFilterData.hue}`) : () => {
			let hue: string = `hue-rotate(${ele.SecretFilterData.hue}deg)`;
			ele.Css('filter', hue).Css('-webkit-filter', hue);
		};
		return this.af(e, "hue", ori.toString(), to.toString(), update, data);
	}
	
	Invert(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		let $ = (q: string): Element => e.querySelector(q)!;
		let target: Element[] = this.is(e) ? [$('.negative-filter feFuncR'), $('.negative-filter feFuncG'), $('.negative-filter feFuncB')] : [e];
		let ele: any = e;
		let update: Function = this.is(e) ? () => {
			let i: number = ele.SecretFilterData.invert;
			let invert: string = `${i} ${1 - i}`;
			target.Each(s => s.Attr('tableValues', invert));
		} : () => {
			let i: number = ele.SecretFilterData.invert;
			let invert: string = `invert(${i * 100}%)`;
			target.Each(s => s.Style('filter', invert).Style('-webkit-filter', invert));
		};
		return this.af(e, "invert", ori.toString(), to.toString(), update, data);
	}
	
	Opacity(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'opacity', this.ts(ori), this.ts(to), data);
	}
	
	Rotate(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'rotation', ori + "deg", to + "deg", data);
	}
	
	Saturate(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		let target: Element = this.is(e) ? e.querySelector('.saturate-filter')! : e;
		let ele: any = e as any;
		let update = this.is(e) ? () => target.Attr('values', ele.SecretFilterData.saturate) : () => {
			let n: string = `saturate(${ele.SecretFilterData.saturate * 100}%)`;
			target.Style('filter', n).Style('-webkit-filter', n);
		};
		return this.af(e, 'saturate', ori.toString(), to.toString(), update, data);
	}
	
	ScaleX(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'scaleX', ori.toString(), to.toString(), data);
	}
	
	ScaleY(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'scaleY', ori.toString(), to.toString(), data);
	}
	
	Sepia(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		let target: Element = this.is(e) ? e.querySelector('.sepia-filter')! : e;
		let ele: any = e;
		let update = this.is(e) ? () => {
			let s = ele.SecretFilterData.sepia;
			target.Attr('values', `${0.393 + 0.607 * (1 - s)} ${0.769 - 0.769 * (1 - s)} ${0.189 - 0.189 * (1 - s)} 0 0
                 ${0.349 - 0.349 * (1 - s)} ${0.686 + 0.314 * (1 - s)} ${0.168 - 0.168 * (1 - s)} 0 0
                 ${0.272 - 0.272 * (1 - s)} ${0.534 - 0.534 * (1 - s)} ${0.131 + 0.869 * (1 - s)} 0 0
                 0 0 0 1 0`)
		} : () => {
			let s: string = `sepia(${ele.SecretFilterData.sepia * 100}%)`;
			target.Style('filter', s).Style('-webkit-filter', s);
		};
		
		return this.af(e, 'sepia', ori.toString(), to.toString(), update, data);
	}
	
	SkewX(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'skewX', ori + 'deg', to + 'deg', data);
	}
	
	SkewY(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'skewY', ori + 'deg', to + 'deg', data);
	}
	
	W(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'width', this.ts(ori), this.ts(to), data);
	}
	
	X(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'left', this.ts(ori), this.ts(to), data);
	}
	
	Y(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'top', this.ts(ori), this.ts(to), data);
	}
	
	/**
	 * Set up DOM data attribute
	 */
	private s(e: Element): void {
		let ele: any = e;
		if (ele.SecretFilterData == null) ele.SecretFilterData = {};
	}
	
	/**
	 * Animate Wrapper for TweenLite
	 * @param e element
	 * @param key animation type key
	 * @param ori original value
	 * @param to new value
	 * @param data animation data
	 */
	private a(e: Element, key: string, ori: string, to: string, data: AnimationData = {}): Element {
		let d: DefaultAnimationData = ParseAnimationData(data, this.easeFactory);
		let fromData: any = {};
		fromData[key] = ori;
		let toData: any = {
			onComplete: d.callback, immediateRender: true, ease: d.ease
		};
		toData[key] = to;
		this.TweenLite.fromTo(e, d.duration / 1000, fromData, toData);
		return e;
	}
	
	/**
	 * Checks if the element is SVG Special Element
	 * returns true if the element is special
	 * @param e the element
	 */
	private is(e: Element) {
		return this.core.IsString(e.Attr('elefact-special-element-filter'));
	}
	
	/**
	 * Animate Filter
	 */
	private af(e: Element, type: string, ori: string, to: string, update: Function, data: AnimationData = {}): Element {
		this.s(e);
		let def: DefaultAnimationData = ParseAnimationData(data, this.easeFactory);
		let filters: any = (e as any).SecretFilterData;
		filters[type] = ori;
		
		let animationData: any = {
			ease: def.ease, immediateRender: true, onComplete: def.callback, onUpdate: update,
		};
		animationData[type] = to;
		this.TweenLite.to(filters, def.duration / 1000, animationData);
		return e;
	}
	
	/**
	 * Convert to px is number
	 * @param val
	 */
	private ts(val: string | number): string {
		if (this.core.IsAnyString(val)) {
			return val as string;
		}
		return val.toString() + "px";
		
	}
	
	
}

export {GSAPSyncAnimator};