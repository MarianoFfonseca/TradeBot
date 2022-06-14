const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    gray: '\x1b[37m'
}

const logColor = (color, content) => {
    console.log(color, content)
}


const log = (content) => {
    console.log(content)
}


module.exports = {
    logColor,
    log,
    colors
}