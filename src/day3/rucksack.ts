export class Rucksack {
  private compartment1: string;
  private compartment2: string;
  private commonItems: string[];
  private priority: number[];

  constructor(contents: string) {
    this.compartment1 = contents.slice(0, contents.length / 2);
    this.compartment2 = contents.slice(contents.length / 2, contents.length);
    this.commonItems = [];
    this.priority = [];

    this.getCommonItems();
    this.setPriority();
  }

  public getSumOfPriorities(): number {
    if (this.priority.length === 0) {
      return 0;
    }

    return this.priority.reduce((a, b) => a + b);
  }

  private getCommonItems(): void {
    const splitContents = this.compartment1.split('');

    for (const letter of splitContents) {
      if (this.compartment2.indexOf(letter) >= 0) {
        this.commonItems.push(letter);
        break;
      }
    }
  }

  private setPriority(): void {
    for (const item of this.commonItems) {
      const itemValue = item.charCodeAt(0);
      if (itemValue > 90) {
        this.priority.push(itemValue - 96);
      } else {
        this.priority.push(itemValue - 38);
      }
    }
  }
}
