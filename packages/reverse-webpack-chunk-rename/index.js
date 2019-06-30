const loaderUtils = require('loader-utils');

class ChunksRenamePlugin {
  constructor({ filename, chunkFilename}) {
    this.filename = filename;
    this.chunkFilename = chunkFilename;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(
      'ChunksRenamePlugin',
      (compilation) => {
        compilation.chunkTemplate.hooks.renderManifest.tap(
          'ChunksRenamePlugin',
          (result, options) => {
            const chunk = options.chunk;

            if (
              this.filename
              && chunk.hasEntryModule()
              && chunk.isOnlyInitial()
            ) {
              if(typeof this.filename === 'function') {
                chunk.name = this.filename(chunk);
              } else {
                chunk.name = loaderUtils.interpolateName(
                  {},
                  this.filename,
                  { content: chunk.hash }
                );
              }
            } else if (this.chunkFilename) {
              if(typeof this.chunkFilename === 'function') {
                chunk.name = this.chunkFilename(chunk);
              } else {
                chunk.name = loaderUtils.interpolateName(
                  {},
                  this.chunkFilename,
                  { content: chunk.hash }
                );
              }
            }
          }
        );
      }
    );
  }
}

module.exports = ChunksRenamePlugin;
