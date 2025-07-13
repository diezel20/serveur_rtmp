const NodeMediaServer = require('node-media-server');

const config = {
  logType: 3,
  rtmp: {
    port: 1935,
    chunk_size: 4096,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg', 
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=5:hls_flags=delete_segments]',
        dash: false
      }
    ]
  }
};
console.log("Configuration chargée :", config);
const nms = new NodeMediaServer(config);
nms.run();
