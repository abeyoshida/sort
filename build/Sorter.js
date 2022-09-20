"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
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
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
