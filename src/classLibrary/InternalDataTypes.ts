import {EaseFactory, kEasing} from "@kirinnee/kease";
import {AnimationData, TextAnimation} from "../index";

interface DefaultAnimationData {
	duration: number;
	callback: Function;
	ease: any;
}

interface DefaultTextAnimationData extends DefaultAnimationData {
	color: string;
	bold: boolean;
	italics: boolean;
	underline: boolean;
	append: boolean;
	newLine: boolean;
}

function ParseTextAnimationData(raw: TextAnimation, easeFactory: EaseFactory): DefaultTextAnimationData {
	let def: DefaultAnimationData = ParseAnimationData(raw, easeFactory);
	return {
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

function ParseAnimationData(raw: AnimationData, easeFactory: EaseFactory): DefaultAnimationData {
	let ease: kEasing = raw.ease || easeFactory.Constant();
	let callback: Function = () => {};
	return {
		duration: raw.duration || 0, callback: raw.callback || callback, ease: ease.Get()
	};
}

export {
	DefaultAnimationData, DefaultTextAnimationData, ParseAnimationData, ParseTextAnimationData
}