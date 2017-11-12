/**
 * Created by qianqing on 2017/3/13.
 */
import axios from 'axios';
//setting
axios.defaults.timeout=5000;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.baseURI="http://localhost:8080/"

export function fetchPost (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
export function fetchGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  login (path,tel,password) {
    return fetchGet('/${path}',{tel},{password})
  }



}





// export default function (url, json, method = 'post', timeout = 25000) {
//   return new Promise((resolve, reject) => {
//     if (!url || !json) {
//       reject(`url or josn is null`);
//       return;
//     }
//
//     let req = {
//       url: url,
//       method: method,
//       data: json,
//       timeout: timeout,
//       headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
//     };
//
//     axios(req)
//       .then((response) => {
//         let res = response.data;
//         if (res.IsSuccess === 1) {
//           resolve(res.Data);
//         } else {
//           if (res.ErrorMessage === 'Request failed with status code 401') { // 如需对token过期做特殊处理，请修改
//             reject(`${url} ${res.ErrorMessage}`);
//           } else {
//             reject(`${url} ${res.ErrorMessage}`);
//           }
//         }
//       })
//       .catch((error) => {
//         console.error(`ajax error: ${url} ### ${error}`);
//         if (error.message) {
//           reject(`${url} ${error.message}`);
//         } else {
//           reject(`ajax 异常: ${url}`);
//         }
//       });
//   });
// };
