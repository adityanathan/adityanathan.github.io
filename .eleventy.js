const markdownItKatex = require("@vscode/markdown-it-katex").default; //importing markdown-it-katex, the .default is required and you will get an error without it
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		'src/css': 'css',
		'src/assets': 'assets'
	});

	// Add notes collection: collects all markdown files in src/notes
	eleventyConfig.addCollection("notes", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/notes/*.md").filter(
			note => !note.data.draft
		);
	});

	eleventyConfig.addNunjucksFilter("year", () => {
		return new Date().getFullYear();
	});

	// katex support - See https://moosyu.nekoweb.org/pages/guides/markdown-it-katex/
	const md = markdownIt({ // this is setting up my library instance of markdown-it
		html: true, // these are rules for markdown it. see the full list and meanings on https://github.com/markdown-it/markdown-it#init-with-presets-and-options
		linkify: true,
		typographer: true,
	}).use(markdownItKatex); // this is me adding markdownItKatex as a plugin for markdown-it

	eleventyConfig.setLibrary("md", md); // now i set my library for the "md" file type to my custom config of markdown-it i just made

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};