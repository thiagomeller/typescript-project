// Interface Media
interface Media {
  play(): void;
  stop(): void;
}

// Implementações concretas
class AudioMedia implements Media {
  play(): void {
    console.log("Reproduzindo áudio...");
  }

  stop(): void {
    console.log("Áudio pausado.");
  }
}

class VideoMedia implements Media {
  play(): void {
    console.log("Reproduzindo vídeo...");
    console.log("Carregando vídeo em 1080p");
  }

  stop(): void {
    console.log("Vídeo pausado.");
  }
}

class PodcastMedia implements Media {
  play(): void {
    console.log("Reproduzindo podcast...");
    console.log("Exibindo notas do episódio");
  }

  stop(): void {
    console.log("Podcast pausado.");
  }
}

class MediaFactory {
  public static createMedia(type: string): Media {
    switch (type.toLowerCase()) {
      case "audio":
        return new AudioMedia();
      case "video":
        return new VideoMedia();
      case "podcast":
        return new PodcastMedia();
      default:
        throw new Error(`Tipo de mídia "${type}" não é suportado.`);
    }
  }
}

function testMedia(type: string) {
  try {
    console.log(`\nCriando mídia do tipo: ${type}`);
    const media = MediaFactory.createMedia(type);

    console.log("Iniciando reprodução...");
    media.play();

    console.log("Parando reprodução...");
    media.stop();
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

testMedia("audio");
testMedia("video");
testMedia("podcast");
testMedia("livro");
