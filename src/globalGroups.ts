//全局规则
import { defineGkdGlobalGroups } from '@gkd-kit/define';
export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-全局',
    enable: false,
    order: 7,
    matchTime: 10000,
    fastQuery: true,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximum: 2,
    actionMaximumKey: 0,
    priorityTime: 10000,
    disableIfAppGroupMatch: '开屏广告',
    rules: [
      {
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
    ],
  },
  {
    key: 1,
    name: '青少年模式-全局',
    enable: false,
    order: 8,
    fastQuery: true,
    matchTime: 100000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '青少年模式',
    rules: [
      {
        key: 0,
        matches: [
          'TextView[text="未成年人模式" ||text*="青少年模式"]',
          'TextView[text="我知道了"||text="知道了"]',
        ],
      },
    ],
  },
  {
    key: 2,
    name: '更新提示-全局',
    enable: false,
    order: 9,
    fastQuery: true,
    matchTime: 100000,
    actionMaximum: 1,
    resetMatch: 'app',
    disableIfAppGroupMatch: '更新提示',
    rules: [
      {
        key: 0,
        matches: [
          '[text="更新"||text="确认"||text="立即升级"||text="立即更新"||text="优先体验"||text="马上升级！"||text="立即下载"]',
          '[text="取消"||text="忽略"||text="暂不升级"||text="暂不更新"||text="下次再说"||text="以后再说"]',
        ],
      },
    ],
  },
]);
