/**
 * Interface for a bubble sort.
 */
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  /** 
   * Adding a modifier to constructor's argument adds it to the class
   * and is accessible by using the 'this' keyword.
   */
  /**
   * Refactoring Sorter to be used as a parent class so that we can 
   * access sort() within the class that is extending Sorter.
   * We won't need a collection as an argument to Sorter since it 
   * will be in the child class.
   */
  // constructor(public collection: Sortable) {
  // }

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1);
        }
      }
    }
  }
}