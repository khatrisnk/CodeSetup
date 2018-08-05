import axios from 'axios';

const reqUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
const makeRequest = (urlExtension, data = {}) => {
    return axios.get(urlExtension, { crossdomain: true });
}
export default {
    getNewProducts: () => makeRequest(reqUrl)
}