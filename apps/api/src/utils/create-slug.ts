export function createSlug(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.normalize("NFD") // Normalize diacritical marks
		.trim()
		.replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
		.replace(/[^a-z0-9 ]/g, "") // Remove symbols
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove non-word characters
		.replace(/\-\-+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}
