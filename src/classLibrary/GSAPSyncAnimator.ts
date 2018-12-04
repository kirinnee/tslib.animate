import {AnimationData, SynchronousAnimator, TextAnimation} from "../index";
import {EaseFactory, kEasing} from "@kirinnee/kease";
import {Core} from "@kirinnee/core";
import {ElementFactory} from "@kirinnee/elefact";
import {DOMEx} from "@kirinnee/domex";

type Appendable = Element | string;

interface DefaultAnimationData {
	duration: number;
	callback: Function;
	ease: any;
	data?: any;
	speed: number;
}

interface DefaultTextAnimationData extends DefaultAnimationData {
	opacity: number;
	fontFamily: string;
	fontSize: string;
	color: string;
	bold: boolean;
	italics: boolean;
	underline: boolean;
	append: boolean;
	newLine: boolean;
}


class GSAPSyncAnimator implements SynchronousAnimator {
	
	private readonly tl: any;
	private readonly ef: EaseFactory;
	private readonly elf: ElementFactory;
	private readonly c: Core;
	
	constructor(TweenLite: any, TextPlugin: any, easeFactory: EaseFactory, eleFact: ElementFactory, domex: DOMEx, core: Core) {
		core.AssertExtend();
		domex.AssertExtend();
		this.tl = TweenLite;
		this.ef = easeFactory;
		this.elf = eleFact;
		this.c = core;
	}
	
	Wait(e: Element, data: AnimationData = {}): Element {
		let d: DefaultAnimationData = this.pa(data);
		let tween = this.tl.to(e, d.duration, {
			onComplete: d.callback,
			immediateRender: true,
			ease: d.ease,
			data: d.data
		});
		tween.timeScale(d.speed);
		return e;
	}
	AnimateText(e: Element, text: string, data: TextAnimation = {}): Element {
		let d: DefaultTextAnimationData = this.pt(data);
		
		let span = this.elf.SPAN().Style({
			color: d.color,
			opacity: d.opacity.toString(),
			'font-weight': d.bold ? '900' : '400',
			'font-style': d.italics ? 'oblique' : 'none',
			'text-decoration': d.underline ? 'underline' : 'none',
			'font-family': d.fontFamily,
			'font-size': d.fontSize
		});
		let elements: Appendable[] = [this.elf.BR(), span];
		if (!d.newLine) elements = elements.Skip(1);
		if (!d.append) e.innerHTML = "";
		e.Append(elements);
		let tween = this.tl.to(span, d.duration, {
			text: text, immediateRender: true, ease: d.ease, onComplete: d.callback, data: d.data
		});
		tween.timeScale(d.speed);
		return e;
	}
	
	BackgroundColor(e: Element, ori: string, to: string, data ?: AnimationData): Element {
		return this.a(e, 'backgroundColor', ori, to, data);
	}
	
	FontColor(e: Element, ori: string, to: string, data ?: AnimationData): Element {
		return this.a(e, 'color', ori, to, data);
	}
	
	Opacity(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'opacity', ori.toString(), to.toString(), data);
	}
	
	X(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'left', this.ts(ori), this.ts(to), data);
	}
	Y(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'top', this.ts(ori), this.ts(to), data);
	}
	H(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'height', this.ts(ori), this.ts(to), data);
	}
	W(e: Element, ori: string | number, to: string | number, data ?: AnimationData): Element {
		return this.a(e, 'width', this.ts(ori), this.ts(to), data);
	}
	
	BorderColor(e: Element, ori: string, to: string, data?: AnimationData): Element {
		return this.a(e, 'borderColor', ori, to, data);
	}
	
	BorderRadius(e: Element, ori: number | string, to: number | string, data?: AnimationData): Element {
		return this.a(e, 'borderRadius', this.ts(ori), this.ts(to), data);
	}
	
	Rotate(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'rotation', ori + "deg", to + "deg", data);
	}
	
	ScaleX(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'scaleX', ori.toString(), to.toString(), data);
	}
	
	ScaleY(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'scaleY', ori.toString(), to.toString(), data);
	}
	
	SkewX(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'skewX', ori + 'deg', to + 'deg', data);
	}
	
	SkewY(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.a(e, 'skewY', ori + 'deg', to + 'deg', data);
	}
	
	
	Sepia(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		let v = (s: number) => `${0.393 + 0.607 * (1 - s)} ${0.769 - 0.769 * (1 - s)} ${0.189 - 0.189 * (1 - s)} 0 0
 ${0.349 - 0.349 * (1 - s)} ${0.686 + 0.314 * (1 - s)} ${0.168 - 0.168 * (1 - s)} 0 0
${0.272 - 0.272 * (1 - s)} ${0.534 - 0.534 * (1 - s)} ${0.131 + 0.869 * (1 - s)} 0 0
0 0 0 1 0`;
		return this.af(e, "se", ori.toString(), to.toString(), '.sepia-filter', false, n => `${n * 100}%`, {values: v}, data);
	}
	
	Saturate(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.af(e, "sa", ori.toString(), to.toString(), '.saturate-filter', false, n => `${n * 100}%`, {values: n => n}, data);
	}
	
	Invert(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		return this.af(e, "i", ori.toString(), to.toString(), '.negative-filter feFunc', true, n => `${n * 100}%`, {tableValues: n => `${n} ${1 - n}`}, data);
	}
	
	Blur(e: Element, ori: number, to: number, data: AnimationData): Element {
		return this.af(e, "bl", ori.toString(), to.toString(), 'feGaussianBlur', false, n => `${n}px`, {stdDeviation: n => n}, data);
		
	}
	
	Greyscale(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		ori = ori.Clamp(0, 1);
		to = to.Clamp(0, 1);
		let v = (gs: number) => `${0.2126 + 0.7874 * (1 - gs)} ${0.7152 - 0.7152 * (1 - gs)} ${0.0722 - 0.0722 * (1 - gs)} 0 0
${0.2126 - 0.2126 * (1 - gs)} ${0.7152 + 0.2848 * (1 - gs)} ${0.0722 - 0.0722 * (1 - gs)} 0 0
${0.2126 - 0.2126 * (1 - gs)} ${0.7152 - 0.7152 * (1 - gs)} ${0.0722 + 0.9278 * (1 - gs)} 0 0
0 0 0 1 0`;
		return this.af(e, "g", ori.toString(), to.toString(), '.grayscale-filter', false, n => `${n * 100}%`, {value: v}, data);
	}
	
	HueRotation(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.af(e, "hr", ori.toString(), to.toString(), '.hue-rotate-filter', false, n => `${n}deg`, {values: n => n}, data);
	}
	
	Brightness(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		return this.af(e, "br", ori.toString(), to.toString(), '.brightness-filter feFunc', true, n => `${n * 100}%`, {slope: n => n}, data);
	}
	
	Contrast(e: Element, ori: number, to: number, data ?: AnimationData): Element {
		let svgTransform: { [s: string]: (n: number) => any } = {
			slope: n => n.toString(), intercept: n => `${0.5 - 0.5 * n}`
		};
		return this.af(e, "c", ori.toString(), to.toString(), '.contrast-filter feFunc', true, n => `${n * 100}%`, svgTransform, data);
		
	}
	
	
	/**
	 * Animate Filter
	 */
	private af(e: Element, type: string, ori: string, to: string, query: string, rgb: boolean, cssTransform: (n: number) => string, svgTransform: { [s: string]: (n: number) => any }, data: AnimationData = {}): Element {
		this.s(e);
		let def: DefaultAnimationData = this.pa(data);
		let filters: any = (e as any).SecretFilterData;
		filters[type] = ori;
		
		let $ = (q: string): Element => e.querySelector(q)!;
		let _ = (q: string): Element[] => [$(q + 'R'), $(q + 'G'), $(q + 'B')];
		let target: Element[] = this.is(e) ? rgb ? _(query) : [$(query)] : [e];
		
		
		let update = this.is(e) ? () => {
			let i = filters[type];
			target.Each(s => {
				for (let k in svgTransform) {
					s.Attr(k, svgTransform[k](i));
				}
			});
		} : () => {
			let i = filters[type];
			target.Each(s => s.Style('filter', `${this.m(type)}(${cssTransform(i)})`));
		};
		
		let animationData: any = {
			ease: def.ease,
			immediateRender: true,
			onComplete: def.callback,
			onUpdate: update,
			data: def.data
		};
		animationData[type] = to;
		let tween = this.tl.to(filters, def.duration, animationData);
		tween.timeScale(def.speed);
		return e;
	}
	/**
	 * Maps filter to CSS filter
	 */
	private m(e: string): string {
		switch (e) {
			case "hr":
				return "hue-rotate";
			case "bl":
				return "blur";
			case "br":
				return "brightness";
			case "i":
				return "invert";
			case "se":
				return "sepia";
			case "sa":
				return "saturate";
			case "g":
				return "grayscale";
			case "c":
				return "contrast";
			default :
				throw new Error("Unknown filter: " + e);
		}
	}
	
	/**
	 * Parse transform data
	 * @param raw
	 */
	private pt(raw: TextAnimation): DefaultTextAnimationData {
		let def: DefaultAnimationData = this.pa(raw);
		return {
			speed: def.speed,
			data: def.data,
			opacity: raw.opacity || 1,
			fontFamily: raw.fontFamily || 'sans-serif',
			fontSize: raw.fontSize || '12px',
			duration: def.duration,
			callback: def.callback,
			ease: def.ease,
			color: raw.color || "black",
			bold: raw.bold || false,
			italics: raw.bold || false,
			underline: raw.underline || false,
			append: raw.append || false,
			newLine: raw.newLine || false
		}
	}
	
	/**
	 * Parse animation data
	 * @param raw
	 */
	private pa(raw: AnimationData): DefaultAnimationData {
		let ease: kEasing = raw.ease || this.ef.Constant();
		let callback: Function = () => {};
		return {
			speed: raw.speed == null ? 1 : raw.speed,
			duration: raw.duration == null ? 0 : raw.duration / 1000,
			callback: raw.callback || callback,
			ease: ease.Get(),
			data: raw.data
		};
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
		let d: DefaultAnimationData = this.pa(data);
		let fromData: any = {};
		fromData[key] = ori;
		let toData: any = {
			onComplete: d.callback, immediateRender: true, ease: d.ease, data: d.data
		};
		toData[key] = to;
		let tween = this.tl.fromTo(e, d.duration, fromData, toData);
		tween.timeScale(d.speed);
		return e;
	}
	
	/**
	 * Checks if the element is SVG Special Element
	 * returns true if the element is special
	 * @param e the element
	 */
	private is(e: Element) {
		return this.c.IsString(e.Attr('elefact-special-element-filter'));
	}
	
	
	/**
	 * Convert to px is number
	 * @param val
	 */
	private ts(val: string | number): string {
		if (this.c.IsAnyString(val)) return val as string;
		return val.toString() + "px";
		
	}
	
	
}

export {GSAPSyncAnimator};