export interface ApiType {
  play(): void;
  pause(): void;
  stop(): void;
}

export class BasicAPI implements ApiType {
  play(): void {
    console.log("Play API BASICA");
  }

  pause(): void {
    console.log("Pause API BASICA");
  }

  stop(): void {
    console.log("Stop API BASICA");
  }
}

export class PremiumAPI implements ApiType {
  play(): void {
    console.log("Play API Premium");
  }

  pause(): void {
    console.log("Pause API Premium");
  }

  stop(): void {
    console.log("Stop API Premium");
  }
}

export class ProfessioanlAPI implements ApiType {
  play(): void {
    console.log("Play API ProfessioanlAPI");
  }

  pause(): void {
    console.log("Pause API ProfessioanlAPI");
  }

  stop(): void {
    console.log("Stop API ProfessioanlAPI");
  }
}
