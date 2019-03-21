const fs = require('fs');
const sharp = require('sharp');
const sharpFullHD = sharp()

function makeProceccedDir(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

const path = __dirname + '/images';
const outputPath = path + '/processed';

fs.readdir(path, (err, items) => {
  if(err || items.length === 0) return;
  makeProceccedDir(outputPath);
  console.log(items);
  processImage(items);
})

const processImage = async function (restArr) {
  if(restArr.length === 0) return;
  const img = restArr.shift();
  if(!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(img)) return processImage(restArr);
  sharp(`${path}/${img}`)
    .resize(1920, 1080)
    .toFile(`${outputPath}/${img}`, (err, info) => {
      if(err) {
        console.log(err);
        throw new Error();
      }
      return processImage(restArr);
    })
}
