/**
 * @jest-environment jsdom
 */
test("properly resolves a relative URL in the href attribute of a link", () => {
	delete window.location;
	window.location = new URL("https://example.com/somePage.html");

	const link = document.createElement("a");
	link.href = "/";
	document.body.appendChild(link);

	expect(link.href).toBe("https://example.com/");
});
