import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import {AsynchronousAnimator, GSAPAsyncAnimator, GSAPSyncAnimator, SynchronousAnimator} from "../../src";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";

let text = require('gsap/TextPlugin');

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);

let eleFact: ElementFactory = new EleFact(domex, "k-space");


let animator: SynchronousAnimator = new GSAPSyncAnimator(TweenLite, text, eases, eleFact, domex, core);
let asyncAnimator: AsynchronousAnimator = new GSAPAsyncAnimator(animator);


let $ = (id: string): Element => document.getElementById(id)!;

let src: string = "https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png";

let specialBox = eleFact.CreateSpecialElement(src, false, {id: "special-box"})
	.Style("width", "40vw")
	.Style("height", "16vw")
	.Style("float", "left");

let normalBox = eleFact.IMG(src, {id: "normal-box"})
	.Style('position', 'relative')
	.Style("width", "40vw")
	.Style("height", "16vw")
	.Style("float", "left");

let textbox = eleFact.DIV({id: "text-box", html: "hello"});

$("test-area").Append([specialBox, normalBox, textbox]).Style('float', 'left');

$("starto")
	.Click(async () => {
		let ele = $("text-box");
		await asyncAnimator.AnimateText(ele, " my name is ernest", {duration: 1000, append: true});
		await asyncAnimator.BackgroundColor(ele, "white", "black", {duration: 1000});
		await asyncAnimator.FontColor(ele, "black", "blue", {duration: 1000});
	})
	.Click(async () => {
		let ele = $("special-box");
		await asyncAnimator.Blur(ele, 0, 10, {duration: 1000});
		await asyncAnimator.Blur(ele, 10, 0, {duration: 1000});
		await asyncAnimator.Brightness(ele, 1, 2, {duration: 1000});
		await asyncAnimator.Brightness(ele, 2, 1, {duration: 1000});
		await asyncAnimator.Contrast(ele, 1, 2, {duration: 1000});
		await asyncAnimator.Contrast(ele, 2, 1, {duration: 1000});
		await asyncAnimator.Greyscale(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Greyscale(ele, 1, 0, {duration: 1000});
		await asyncAnimator.HueRotation(ele, 0, 360, {duration: 1000});
		await asyncAnimator.Invert(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Invert(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Saturate(ele, 1, 5, {duration: 1000});
		await asyncAnimator.Saturate(ele, 5, 1, {duration: 1000});
		await asyncAnimator.Sepia(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Sepia(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Opacity(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Opacity(ele, 0, 1, {duration: 1000});
		await asyncAnimator.X(ele, 0, 100, {duration: 1000});
		await asyncAnimator.Y(ele, 0, 100, {duration: 1000});
		await asyncAnimator.W(ele, "40vw", "20vw", {duration: 1000});
		await asyncAnimator.H(ele, "16vw", "8vw", {duration: 1000});
		await asyncAnimator.ScaleX(ele, 1, 2, {duration: 1000});
		await asyncAnimator.ScaleY(ele, 1, 2, {duration: 1000});
		await asyncAnimator.SkewX(ele, 0, 15, {duration: 1000});
		await asyncAnimator.SkewY(ele, 0, 15, {duration: 1000});
		await asyncAnimator.Rotate(ele, 0, 360, {duration: 1000});
	})
	.Click(async () => {
		let ele = $("normal-box");
		await asyncAnimator.Blur(ele, 0, 10, {duration: 1000});
		await asyncAnimator.Blur(ele, 10, 0, {duration: 1000});
		await asyncAnimator.Brightness(ele, 1, 2, {duration: 1000});
		await asyncAnimator.Brightness(ele, 2, 1, {duration: 1000});
		await asyncAnimator.Contrast(ele, 1, 2, {duration: 1000});
		await asyncAnimator.Contrast(ele, 2, 1, {duration: 1000});
		await asyncAnimator.Greyscale(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Greyscale(ele, 1, 0, {duration: 1000});
		await asyncAnimator.HueRotation(ele, 0, 360, {duration: 1000});
		await asyncAnimator.Invert(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Invert(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Saturate(ele, 1, 5, {duration: 1000});
		await asyncAnimator.Saturate(ele, 5, 1, {duration: 1000});
		await asyncAnimator.Sepia(ele, 0, 1, {duration: 1000});
		await asyncAnimator.Sepia(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Opacity(ele, 1, 0, {duration: 1000});
		await asyncAnimator.Opacity(ele, 0, 1, {duration: 1000});
		await asyncAnimator.X(ele, 0, 100, {duration: 1000});
		await asyncAnimator.Y(ele, 0, 100, {duration: 1000});
		await asyncAnimator.W(ele, "40vw", "20vw", {duration: 1000});
		await asyncAnimator.H(ele, "16vw", "8vw", {duration: 1000});
		await asyncAnimator.ScaleX(ele, 1, 2, {duration: 1000});
		await asyncAnimator.ScaleY(ele, 1, 2, {duration: 1000});
		await asyncAnimator.SkewX(ele, 0, 15, {duration: 1000});
		await asyncAnimator.SkewY(ele, 0, 15, {duration: 1000});
		await asyncAnimator.Rotate(ele, 0, 360, {duration: 1000});
	});

