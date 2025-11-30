// 这里简单写一些假数据，真实项目可以换成接口
const baseComments = [
  {
    id: 'c1',
    avatar: 'https://placehold.co/40x40',
    userName: '评论用户1',
    content: '你的视频真好看！',
    time: '1小时前',
    likes: 1,
  },
  {
    id: 'c2',
    avatar: 'https://placehold.co/40x40?text=A',
    userName: '评论用户2',
    content: '你的视频真好看！',
    time: '2小时前',
    likes: 2,
  },
  {
    id: 'c3',
    avatar: 'https://placehold.co/40x40?text=B',
    userName: '评论用户3',
    content: '你的视频真好看！',
    time: '3小时前',
    likes: 3,
  },
];

export const mockVideos = [
  {
    id: 'v1',
    title: '大家好我是用户1',
    description: '大家好我是用户1，很高兴认识大家！',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    cover: 'https://placehold.co/600x800/000000/FFFFFF?text=Video+1',
    authorName: 'AAA用户1',
    authorAvatar: 'https://placehold.co/80x80?text=M',
    likes: 1,
    comments: baseComments,
  },
  {
    id: 'v2',
    title: '大家好我是用户2',
    description: '大家好我是用户2，很高兴认识大家！。',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    cover: 'https://placehold.co/600x800/111111/FFFFFF?text=Video+2',
    authorName: 'BBB用户2',
    authorAvatar: 'https://placehold.co/80x80?text=J',
    likes: 2,
    comments: baseComments,
  },
  {
    id: 'v3',
    title: '大家好我是用户3',
    description: '大家好我是用户3，很高兴认识大家！',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    cover: 'https://placehold.co/600x800/222222/FFFFFF?text=Video+3',
    authorName: 'CCC用户3',
    authorAvatar: 'https://placehold.co/80x80?text=P',
    likes: 3,
    comments: baseComments,
  },
];

// 模拟请求（返回 Promise）
export function fetchVideoList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVideos);
    }, 400);
  });
}
