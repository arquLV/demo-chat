const generateRandomString = (len: number) => [...new Array(len)]
    .map(i => 'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 36)]).join('')

const generateColor = () => {
    let colorComponents = [Math.floor(Math.random() * (249 - 134)) + 134, 134, 249]
    colorComponents.sort(() => Math.random() * 2 - 1)
    
    return `rgb(${colorComponents[0]},${colorComponents[1]},${colorComponents[2]})`
}

export { generateRandomString, generateColor }
