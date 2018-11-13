export default class ApiService {
  _baseUrl = 'http://www.mocky.io/v2/5beb2f672f00008041da3e27';

  getResources = async () => {
    const res = await fetch(this._baseUrl);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._baseUrl}, received ${res.status}`);
    }

    return await res.json();
  };

  getFruits = async () => {
    return await this.getResources();
  };
}
