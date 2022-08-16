import axios from "axios"

export const Api = {
    getData: function() {return axios.get('https://sheets.googleapis.com/v4/spreadsheets/1i91cDOeqMPPUhjNua0wjN-7wMobkI16_fdGPixVZwWY/values/Productos!A:I?key=AIzaSyCPgbzra22Qp4qhikO7bFkvkjH8uMixAA8')},
}

export default Api;