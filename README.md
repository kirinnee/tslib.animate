# Animate

Cross-browser animation interface that includes filter animations. Uses GSAP underneath

Source: [GitLab](https://gitlab.com/node-packages-kirin/animate)

Mirror: [GitHub](https://github.com/kirinnee/tslib.animate)

# Getting Started

Install via NPM 
```bash
$ npm i @kirinnee/animate
```

or 

Install via Yarn
```bash
$ yarn add @kirinnee/animate --prefer-offline
```

Using in browser

Attach scripts in `dist/` folder
```html
<script src="./dist/animate.min.js"></script>
```

# Usage

# Dependency

As per all my library, dependency have to done via dependency injection.
Animate Depends on the follow libraries:

- [@kirinnee/core](https://www.npmjs.com/package/@kirinnee/core)
- [@kirinnee/domex](https://www.npmjs.com/package/@kirinnee/domex)
- [@kirinnee/kease](https://www.npmjs.com/package/@kirinnee/kease)
- [@kirinnee/elefact](https://www.npmjs.com/package/@kirinnee/elefact)
- [gsap](https://www.npmjs.com/package/gsap)
- [gsap/TextPlugin](https://www.npmjs.com/package/gsap)

These dependency objects have to constructed, extended before usage:

##### Importing:
```ts
//Import the dependencies
import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";
let text = require('gsap/TextPlugin');
```
##### Constructing and Extending Dependencies:
```ts
let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);
let eleFact: ElementFactory = new EleFact(domex, "k-space");
```
##### Constructing the Animators
```ts
//Construct Synchronous animator
let animator: SynchronousAnimator = new GSAPSyncAnimator(TweenLite, text, eases, eleFact, domex, core);

//Construct Asynchronous animator
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);
```

## Using the animators
```ts
let ele:HTMLElement = document.querySelector("#some-id");

let options: AnimationData = {
	callback: ()=> console.log('animation done!'), //Callback after the animation finishes,
	duration: 1000, //duration of the animation in milliseconds, default is 0
	ease: eases.Constant(), //Animation interpolation, default is Constant
}

//Synchronous animation
animator.<AnimationType>(ele, <from value>, <to value>, optitons);

//Async Animation
await asyncAnimator.<AnimationType>(ele, <from value>, <to value>, options);

```

## Animation Types
```ts
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
```


## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning 
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

## Authors
* [kirinnee](mailto:kirinnee@gmail.com) 

## License
This project is licensed under MIT - see the [LICENSE.md](LICENSE.MD) file for details