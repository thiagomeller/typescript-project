import { ApiType } from "./api";

export abstract class Player {
  private apiType: ApiType;

  constructor(apiType: ApiType) {
    this.apiType = apiType;
  }

  public play() {
    this.apiType.play();
  }

  public pause() {
    this.apiType.pause();
  }

  public stop() {
    this.apiType.stop();
  }
}

export class MusicPlayer extends Player {
  public pause(): void {
    console.log("PAUSE MUSIC");
  }

  public stop(): void {
    console.log("STOP MUSIC");
  }

  public play(): void {
    console.log("START MUSIC");
  }
}

export class VideoPlayer extends Player {
  public pause(): void {
    console.log("PAUSE VIDEO");
  }

  public stop(): void {
    console.log("STOP VIDEO");
  }

  public play(): void {
    console.log("START VIDEO");
  }
}

export class PodcastPlayer extends Player {
  public pause(): void {
    console.log("PAUSE PodcastPlayer");
  }

  public stop(): void {
    console.log("STOP PodcastPlayer");
  }

  public play(): void {
    console.log("START PodcastPlayer");
  }
}
