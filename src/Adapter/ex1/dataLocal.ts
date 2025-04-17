export class DataLocal {
  private date: string;

  constructor(date: string) {
    this.date = date;
  }

  public getDateString(): string {
    return this.date;
  }

  private getMonthNames(monthNumber: number): string {
    const monthsList = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const selectedMonth = monthsList[monthNumber - 1];

    return selectedMonth;
  }

  public getLocalDateString(): string {
    const [day, month, year] = this.date.split("/");
    const dateString = `${day} de ${this.getMonthNames(
      parseInt(month)
    )} de ${year}`;
    return dateString;
  }
}
