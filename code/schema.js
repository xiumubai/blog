/**
 * TODO:可删除
 * 公共的属性和方法
 */

 export const schemaConstructor = {
  "id": 1, // 直播间id
  "solution": "dramalive", // 视频类型 dramalive | kkbTv | playBack | commonVideo
  "metaData": {
    "name": "", // 课程名称
    "version": "", // 版本
    "createTime": "",
    "description": ""
  },
  "payload": {
    "messgaeTrackListGroup": [
      {
        "list": [
          {
            "id": "",
            "reciveTime": "",
            "sedTime": "",
            "form" : {
              "uid": "",
              "uname": "",
              "avatar": ""
            },
            "content": {
              "videoContent": {
                "videoUrl": "",
                "mineType": "",
                "contentLength": "",
                "duration": ""
              },
              "messageContent": {
                "text": "",
                "imgSrc": "",
                "atUid": "",
                "atName": ""
              }
            }
          }
        ],
        "type": ""
      }
    ],
    "contentTrackListGroup": {},
    "interRactTrackListGroup": {}
  },
  "clipRangeList": [
    {
      "stat": "",
      "end": ""
    }
  ]
}

export const parser = {
  parserUtils(dataSource, type) {},
  jsonParser(url) {},
  csvParse(file) {}
}

export const editor = {
  "executeCommand": {
    execute() {},
    undo() {},
    addMessageCommand() {},
    delMessageCommand() {},
    updateMessgaeCommand() {},
    addClipRangeCommand() {},
    delClipRnageCommand() {}
  },
  import() {},
  export() {},
  undo() {},
  redo() {}
}

export const player = {
  "currentTime": "",
  "playBackRate": "",
  "volume": "",
  "cover": "",
  "sources": "",
  mount() {},
  play() {},
  pause() {},
  requireFullScreen() {},
  subscribe() {}
}

export const playerEventListener = {
  onCacelPlay() {},
  onTimeUpdate() {},
  onPlayBackRateChange() {},
  onPlay() {},
  onPause() {},
  onEnded() {},
  onSeelking() {},
  onseeked() {},
  ondurationchange() {}
}
