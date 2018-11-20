import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

interface IPage {
	chunks: [string,string][];
	pages: Page[]
}

interface Page{
	template: string;
	output:string;
	chunks: string[];
	title: string;
}

export function ConvertToOption(p:Page) : HtmlWebpackPlugin.Options{
	let opts: HtmlWebpackPlugin.Options = {
		title: p.title || "Index",
		filename: p.output || "index.html",
		chunk: p.chunks || ["index"]
	};
	if (p.template) opts.template = path.join("./public", p.template);
	return opts;
}

export {IPage, Page};