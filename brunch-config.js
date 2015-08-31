module.exports = {
	config: {
		files: {
			javascripts: {
				joinTo: 'app.js'
			},

			stylesheets: {
				joinTo: 'app.css'
			}
		},

		plugins: {
			postcss: {
				processors: [
					require('postcss-nested'),
					require('postcss-simple-vars'),
					require('autoprefixer')(['last 8 versions'])
				]
			}
		}

	},

	autoReload: {
		enabled: {
			css: true,
			assets: true
		}
	}
}
