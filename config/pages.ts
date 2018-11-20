import {IPage} from "./Helper";

let pages :IPage = {
	chunks: [
		["index","./src/index.ts"]
	],
	pages: [
		{
			template: "index.html",
			output: "index.html",
			chunks: ['index'],
			title: 'Index'
		},
		{
			template: "index.html",
			output: "home.html",
			chunks: ['index'],
			title: 'Index'
		}
	],
};

export {pages};