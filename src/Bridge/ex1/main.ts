import { BasicAPI } from "./api";
import { MusicPlayer, PodcastPlayer, VideoPlayer } from "./player";

let api = new BasicAPI();

const music = new MusicPlayer(api);
music.play();
music.pause();

const video = new VideoPlayer(api);
video.play();
video.pause();

const podcast = new PodcastPlayer(api);
podcast.play();
podcast.pause();
