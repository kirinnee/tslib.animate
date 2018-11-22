import {Core, Kore} from "@kirinnee/core";
import {DOMEx, DOMExtend} from "@kirinnee/domex";
import {EleFact, ElementFactory} from "@kirinnee/elefact";
import {GSAPSyncAnimator, SynchronousAnimator} from "../../src";
import * as gsap from 'gsap';
import {TweenLite} from 'gsap';
import {EaseFactory, kEaseFactory} from "@kirinnee/kease";

let core: Core = new Kore();
core.ExtendPrimitives();

let domex: DOMEx = new DOMExtend(core);
domex.ExtendPrimitives();

let eases: EaseFactory = new kEaseFactory(gsap);

let eleFact: ElementFactory = new EleFact(domex, "k-space");


let animator: SynchronousAnimator = new GSAPSyncAnimator("k-space", TweenLite, eases, eleFact, domex, core);

let $ = (id: string): Element => document.getElementById(id)!;

let src: string = "https://s3-ap-southeast-1.amazonaws.com/kirin.static.host/test/book.png";

let specialBox = eleFact.CreateSpecialElement(src, false, {id: "special-box"})
	.Style("width", "40vw")
	.Style("height", "16vw")
	.Style("float", "left");

let normalBox = eleFact.IMG(src, {id: "normal-box"})
	.Style("width", "40vw")
	.Style("height", "16vw")
	.Style("float", "left");

$("test-area").Append([specialBox, normalBox]);

$("starto").Click(() => animator.Blur($("special-box"), 0, 10, {duration: 1000}))
	.Click(() => animator.Blur($("normal-box"), 0, 10, {duration: 1000}));

