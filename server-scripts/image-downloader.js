const fs = require('fs')

const ITEM_IMAGE_PATH = './images/Items/';

const downloadItemImage = async (itemName) => {
    if (!itemName) return;

    ensureFolderExist();

    const itemPath = `${ITEM_IMAGE_PATH}${itemName}.png`;
    const exists = fs.existsSync(itemPath);

    if (exists) {
        const image = fs.readFileSync(itemPath)
        return image;
    }
    
    const url = `https://render.albiononline.com/v1/item/${itemName}.png`
    const arrayBuffer = await (await fetch(url)).arrayBuffer()
    const content = Buffer.from(arrayBuffer)
    fs.writeFileSync(itemPath, content, () => {})
    return content;
}

const ensureFolderExist = () => {
    const exists = fs.existsSync(ITEM_IMAGE_PATH);
    if (exists) return;
    fs.mkdirSync(ITEM_IMAGE_PATH);
}

module.exports = {
    downloadItemImage,
}