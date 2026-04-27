// Este script copia los SVG necesarios para el carrusel al directorio public/img
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../img');
const destDir = path.join(__dirname, '../public/img');

const filesToCopy = ['reina.svg', 'CER.svg'];

filesToCopy.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copiado: ${file}`);
  } else {
    console.log(`No encontrado: ${file}`);
  }
});
