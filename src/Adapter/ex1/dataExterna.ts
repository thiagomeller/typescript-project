export class DataExterna {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  getDate(): string {
    return this.data;
  }

  getDay(): string {
    return this.data.split("-")[2];
  }

  getMonth(): string {
    return this.data.split("-")[1];
  }

  getYear(): string {
    return this.data.split("-")[0];
  }
}
