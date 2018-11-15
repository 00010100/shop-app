export default class ApiService {
  _baseUrl = 'http://www.mocky.io/v2/5bedb7cd330000c943a297ad';

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
