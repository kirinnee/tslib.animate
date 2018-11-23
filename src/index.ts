import {kEasing} from "@kirinnee/kease";
import {GSAPSyncAnimator} from "./classLibrary/GSAPSyncAnimator";
import {GSAPAsyncAnimator} from "./classLibrary/GSAPAsyncAnimator";

/**
 * Animation Options.
 */
interface AnimationData {
	/**
	 * How long the animation will be in milliseconds
	 * Default is 0
	 */
	duration?: number;
	/**
	 * Function to execute after animation ended
	 */
	callback?: Function;
	/**
	 * Animation Interpolation to use.
	 * Default is constant
	 */
	ease?: kEasing;
}

/**
 * Text Animation Options
 */
interface TextAnimation extends AnimationData {
	/**
	 * The color of the text. Can be in #six-char, rgb(r,g,b), or HTML accepted colors like "black".
	 * Default is black
	 */
	color?: string;
	/**
	 * Whether the fonts are bold
	 * Default is false
	 */
	bold?: boolean;
	/**
	 * Whether the fonts are italics
	 * Default is false
	 */
	italics?: boolean;
	/**
	 * Whether the text are underlined
	 * Default is false
	 */
	underline?: boolean;
	/**
	 * Whether the to append to the current text
	 * Default is false
	 */
	append?: boolean;
	/**
	 * Whether to inject <br>, make it a new line
	 * Default is false
	 */
	newLine?: boolean;
}

interface SynchronousAnimator {
	
	/**
	 * Does nothing, the element waits
	 * @param e the element
	 * @param data the animation options
	 * @constructor
	 */
	Wait(e: Element, data?: AnimationData): Element;
	
	/**
	 * Animates the "left" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	/**
	 * Animates the "top" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	/**
	 * Animates the "width" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	/**
	 * Animates the "height" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Element;
	
	/**
	 * Animates the transform scaling X of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Animates the transform scaling Y of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Animates the transform skew X of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Animates the transform skew Y of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Animates the transform Rotation of the element
	 * @param e the element to animate
	 * @param ori the start value in degrees from original
	 * @param to the send value in degrees from original
	 * @param data the animation data
	 * @constructor
	 */
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Animates the alpha value of the element
	 * 0 is transparent, 1 is fully opaque.
	 * @param e the element to animate
	 * @param ori the start value.
	 * @param to the end value
	 * @param data the animation data
	 * @constructor
	 */
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Hue Shift the background color of the element.
	 * Accepted color value includes #six-character, rgb(r,g,b) or HTML accepted enums
	 * @param e the element to animate
	 * @param ori the starting color.
	 * @param to the end color
	 * @param data the animation data
	 * @constructor
	 */
	BackgroundColor(e: Element, ori: string, to: string, data?: AnimationData): Element;
	
	/**
	 * Hue Shift the font color of the element.
	 * Accepted color value includes #six-character, rgb(r,g,b) or HTML accepted enums
	 * @param e the element to animate
	 * @param ori the starting color.
	 * @param to the end color
	 * @param data the animation data
	 * @constructor
	 */
	FontColor(e: Element, ori: string, to: String, data?: AnimationData): Element;
	
	/**
	 * Animates the text in scrolling-like fashion
	 * @param e the element to animate
	 * @param text the text to animate
	 * @param data the animation options
	 * @constructor
	 */
	AnimateText(e: Element, text: string, data?: TextAnimation): Element;
	
	/**
	 * Blurs the image
	 * Clear image has value of 0.
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Negates the color of the image
	 * Normal has the value of 0. At 0.5, te picture will be grey. At 1, all the colors are negated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Negates the color of the image
	 * Normal has the value of 0. At 0.5, te picture will be grey. At 1, all the colors are negated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Greyscale the color of the image
	 * Normal has the value of 0. At value of 1, the image will be mono-chromed
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Adjust the contrast of the image.
	 * Normal images have a value of 1. Values lower than 1 will have low contrast, values larger than 1 have higher contrast
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Adjust the brightness of the image.
	 * Normal images have a value of 1. Values lower than 1 will be darker, values larger than 1 be brighter
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Adjust the saturation of the image.
	 * Normal images have a value of 1. Values lower than 1 will be less saturated, values larger than 1 be more saturated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Element;
	
	/**
	 * Rotate the hue of the image.
	 * The values are rotated in degrees. At 0 and 360, the image will look normal.
	 * @param e element to animate
	 * @param ori the starting value in degrees
	 * @param to the ending value in degrees
	 * @param data the options to animate
	 * @constructor
	 */
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Element;
}

interface AsynchronousAnimator {
	
	/**
	 * Does nothing, the element waits
	 * @param e the element
	 * @param data the animation options
	 * @constructor
	 */
	Wait(e: Element, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the "left" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	X(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the "top" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	Y(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the "width" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	W(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the "height" property of CSS
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	H(e: Element, ori: string | number, to: string | number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the transform scaling X of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	ScaleX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the transform scaling Y of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	ScaleY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the transform skew X of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	SkewX(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the transform skew Y of the element
	 * @param e the element to animate
	 * @param ori the start value
	 * @param to the send value
	 * @param data the animation data
	 * @constructor
	 */
	SkewY(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the transform Rotation of the element
	 * @param e the element to animate
	 * @param ori the start value in degrees from original
	 * @param to the send value in degrees from original
	 * @param data the animation data
	 * @constructor
	 */
	Rotate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the alpha value of the element
	 * 0 is transparent, 1 is fully opaque.
	 * @param e the element to animate
	 * @param ori the start value.
	 * @param to the end value
	 * @param data the animation data
	 * @constructor
	 */
	Opacity(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Hue Shift the background color of the element.
	 * Accepted color value includes #six-character, rgb(r,g,b) or HTML accepted enums
	 * @param e the element to animate
	 * @param ori the starting color.
	 * @param to the end color
	 * @param data the animation data
	 * @constructor
	 */
	BackgroundColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element>;
	
	/**
	 * Hue Shift the font color of the element.
	 * Accepted color value includes #six-character, rgb(r,g,b) or HTML accepted enums
	 * @param e the element to animate
	 * @param ori the starting color.
	 * @param to the end color
	 * @param data the animation data
	 * @constructor
	 */
	FontColor(e: Element, ori: string, to: string, data?: AnimationData): Promise<Element>;
	
	/**
	 * Animates the text in scrolling-like fashion
	 * @param e the element to animate
	 * @param text the text to animate
	 * @param data the animation options
	 * @constructor
	 */
	AnimateText(e: Element, text: string, data?: TextAnimation): Promise<Element>;
	
	/**
	 * Blurs the image
	 * Clear image has value of 0.
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Blur(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Negates the color of the image
	 * Normal has the value of 0. At 0.5, te picture will be grey. At 1, all the colors are negated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Invert(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Negates the color of the image
	 * Normal has the value of 0. At 0.5, te picture will be grey. At 1, all the colors are negated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Sepia(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Greyscale the color of the image
	 * Normal has the value of 0. At value of 1, the image will be mono-chromed
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Greyscale(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Adjust the contrast of the image.
	 * Normal images have a value of 1. Values lower than 1 will have low contrast, values larger than 1 have higher contrast
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Contrast(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Adjust the brightness of the image.
	 * Normal images have a value of 1. Values lower than 1 will be darker, values larger than 1 be brighter
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Brightness(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Adjust the saturation of the image.
	 * Normal images have a value of 1. Values lower than 1 will be less saturated, values larger than 1 be more saturated
	 * @param e element to animate
	 * @param ori the starting value
	 * @param to the ending value
	 * @param data the options to animate
	 * @constructor
	 */
	Saturate(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
	
	/**
	 * Rotate the hue of the image.
	 * The values are rotated in degrees. At 0 and 360, the image will look normal.
	 * @param e element to animate
	 * @param ori the starting value in degrees
	 * @param to the ending value in degrees
	 * @param data the options to animate
	 * @constructor
	 */
	HueRotation(e: Element, ori: number, to: number, data?: AnimationData): Promise<Element>;
}

export {
	AnimationData, TextAnimation, SynchronousAnimator, AsynchronousAnimator, GSAPSyncAnimator, GSAPAsyncAnimator
}