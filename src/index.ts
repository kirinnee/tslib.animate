import {kEasing} from "@kirinnee/kease";
import {GSAPSyncAnimator} from "./classLibrary/GSAPSyncAnimator";
import {GSAPAsyncAnimator} from "./classLibrary/GSAPAsyncAnimator";

interface AnimationData {
	duration?: number;
	callback?: Function;
	ease?: kEasing;
}

interface TextAnimation extends AnimationData {
	color?: string;
	bold?: boolean;
	italics?: boolean;
	underline?: boolean;
	append?: boolean;
	newLine?: boolean;
}

interface SynchronousAnimator {
	
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	BackgroundColor(oe: Element, ri: string, to: string, data?: AnimationData): Element;
	
	FontColor(e: Element, ori: string, to: String, data?: AnimationData): Element;
	
	AnimateText(e: Element, text: string, data?: TextAnimation): Element;
	
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Element;
}

interface AsynchronousAnimator {
	
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	BackgroundColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element>;
	
	FontColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element>;
	
	AnimateText(e: Element, text: string, data?: TextAnimation): Promise<Element>;
	
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
}

export {
	AnimationData, TextAnimation, SynchronousAnimator, AsynchronousAnimator, GSAPSyncAnimator, GSAPAsyncAnimator
}