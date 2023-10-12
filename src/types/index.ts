export type Video = {
    id: number,
    title: string,
    description: string,
    duration: string,
    live_status: string,
    youtube_video_id: string,
    youtube_channel_id: string,
    youtube_channel_title: string,
    thumbnails: {[key: string]: any},
};
