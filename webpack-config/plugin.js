// 压缩文件，给打出的包做版本号
const archiver = require("archiver");
const fs = require("fs");
const path = require("path");
class ZipPlugin {
  constructor(options) {
    const { fileName, mode } = options;
    this.fileName = fileName;
    this.mode = mode;
  }
  apply(compiler) {
    const { fileName, mode } = this;
    compiler.hooks.afterEmit.tap("ZipPlugin", (compilation) => {
      const outputZipPath = `dist/${mode}/${fileName}.zip`; // 压缩包路径
      // 创建一个可写流，用于写入压缩包文件
      const output = fs.createWriteStream(outputZipPath);
      const archive = archiver("zip", {
        zlib: { level: 9 }, // 压缩级别，可调整
      });

      // 将打包输出目录中的文件添加到压缩包中
      archive.directory(path.join(__dirname, `dist/${mode}`), false);

      // 完成压缩并写入文件
      archive.pipe(output);
      archive.finalize();

      console.log("Bundle zip created:", outputZipPath);
    });
  }
}
module.exports = {
  ZipPlugin,
};
