export type Video = {
    id: number,
    title: string,
    description: string,
    youtube_video_id: string,
    youtube_channel_id: string,
    youtube_channel_title: string,
    thumbnails: {[key: string]: any},
};
