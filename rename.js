const fs = require("fs")

// list all of the files in the `data` folder
for (const filename of fs.readdirSync("data")) {
	// get the filename without an extension
	const baseFilename = filename.substr(0, filename.lastIndexOf("."))

	// rename the file with a new extension
	fs.renameSync(`data/${filename}`, `data/${baseFilename}.txt`)
}
