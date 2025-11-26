-- Project-specific HTML/CSS configuration
vim.g.html_css = {
	enable_on = { "html", "astro" }, -- File types for this project only
	handlers = {
		definition = {
			bind = "gd",
		},
		hover = {
			bind = "K",
			wrap = true,
			border = "none",
			position = "cursor",
		},
	},
	documentation = {
		auto_show = true,
	},
	style_sheets = {
		-- Project-specific stylesheets
		"./src/styles/global.css",
	},
}
