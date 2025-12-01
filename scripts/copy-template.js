const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/template');
const libDir = path.join(__dirname, '../lib/template');

if (fs.existsSync(srcDir)) {
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  const files = fs.readdirSync(srcDir);
  files.forEach(file => {
    const srcFile = path.join(srcDir, file);
    const libFile = path.join(libDir, file);
    fs.copyFileSync(srcFile, libFile);
  });
  
  console.log('✅ 模板文件已复制到 lib/template');
}

