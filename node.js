const fs = require('fs')
const files = fs.readdirSync('./img')
files.forEach((file, index) => {
    const _file = file.split('.')[0]
    // 根据你的要求修改名字
    let newName = _file.replace('img ', `img`) + '.png'
    console.log(newName)
    fs.rename(`./img/${files[index]}`, `./img/${newName}`, (err) => {
        if (err) {
            console.log('失败: ', err)
        }
    })
})