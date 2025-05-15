export class WatchlistService {
  private key = 'watchlist';

  getList(): any[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  add(movie: any) {
    const list = this.getList();
    localStorage.setItem(this.key, JSON.stringify([...list, movie]));
  }

  remove(id: number) {
    const list = this.getList().filter(m => m.id !== id);
    localStorage.setItem(this.key, JSON.stringify(list));
  }

  isInList(id: number): boolean {
    return this.getList().some(m => m.id === id);
  }
}
