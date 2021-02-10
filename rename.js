const fs = require("fs")

for (const filename of fs.readdirSync("data")){
    const baseFilename= filename.substr(0, filename.lastIndexOf("."))

    fs.renameSync(`data/${filename}`, `data/${baseFilename}.ts` )
}