import * as path from "path";
import webpack, {Entry, Plugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Kore} from "@kirinnee/core";
import {polyfill} from "./webpack.polyfill";
import {pages} from "./pages";
import {ConvertToOption, Page} from "./Helper";
import {rules} from "./webpack.rules"; 

let core = new Kore();
core.ExtendPrimitives();

let plugins: Plugin[] = pages.pages
	.Map(s => ConvertToOption(s as Page))
	.Map(s => new HtmlWebpackPlugin(s));

//Add polyfill to each chunk if there is polyfill!
let entry: Entry = new Map(pages.chunks)
	.MapValue(v => core.WrapArray(v))
	.MapValue(v=> polyfill.concat(v as string[])) 
	.AsObject() as Entry;

let config: webpack.Configuration = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, "../test/e2e/targets/"),
		filename: "[name].js",
		libraryTarget: "umd",
		globalObject: "(typeof window !== 'undefined' ? window : this)"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	plugins: plugins,
	mode: "development",
	devtool: "source-map",
	module: {rules: rules},
	target: "web"
};

export default config;
