export class Bookstore {
  static version = "1";

  add(a: number, b: number): number {
    console.log(`version ${Bookstore.version}`);
    return a + b;
  }
}
