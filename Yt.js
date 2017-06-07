const ytdl = require('ytdl-core');
module.exports = function(ctx, cb) {
  if (ctx.data.id || ctx.data.url) {
    console.log(ctx.data.url || `http://www.youtube.com/watch?v=${ctx.data.id}`);
    ytdl.getInfo(ctx.data.url || `http://www.youtube.com/watch?v=${ctx.data.id}`).then(result => {
      cb(null, result);
    }).catch(e => {
      cb(new Error(e));
    });
  } else {
    cb(new Error("You need to specify the url or the id parameter."));
  }
};