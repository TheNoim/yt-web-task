const ytdl = require('ytdl-core');
module.exports = function(ctx, cb) {
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};