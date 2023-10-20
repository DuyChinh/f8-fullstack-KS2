// // import { config } from "./config.js";

// //Built Http Client
// const { SERVER_API } = "https://api-auth-two.vercel.app/";
// export const client = {
//   serverApi: SERVER_API,
//   token: null,
//   setUrl: function (url) {
//     this.serverApi = url;
//     // console.log(this.serverApi);
//   },

//   setToken: function (token) {
//     this.token = token;
//   },

//   send: async function (url, method = "GET", body = null, token = null) {
//     // url = SERVER_API + url;
//     url = `${this.serverApi}${url}`;
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     if (this.token) {
//       headers["Authorization"] = `Bearer ${this.token}`;
//     }
//     const options = {
//       method,
//       headers,
//       // headers: {
//       //     "Content-Type": "application/json",
//       // },
//     };
//     if (body) {
//       options.body = JSON.stringify(body);
//     }

//     const response = await fetch(url, options);

//     const data = await response.json();
//     return { response, data };
//   },

//   get: function (url) {
//     return this.send(url);
//   },

//   post: function (url, body) {
//     // console.log(this, url);
//     return this.send(url, "POST", body);
//   },

//   put: function (url, body) {
//     return this.send(url, "PUT", body);
//   },

//   patch: function (url, body) {
//     return this.send(url, "PATCH", body);
//   },

//   delete: function (url) {
//     return this.send(url, "DELETE", body);
//   },
// };
// import server from "../configs";

const SERVER_API  = "https://api-auth-two.vercel.app/";

export default class HttpClient {
  constructor(serverApi = SERVER_API) {
    this.serverApi = serverApi;
  }

  /**
   * @async
   * @function callApi
   * @param {string} url - The endpoint to call.
   * @param {string} method - The HTTP method to use.
   * @param {object} params - The query parameters to include in the request.
   * @param {object} body - The body of the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  async callApi(url, method, params = {}, body = {}, token = null) {
    url = this.serverApi + url;
    if (Object.keys(params).length) {
      url = url + "?" + new URLSearchParams(params).toString();
    }
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      options.headers.Authorization = `Bearer ${token}`;
    }
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body);
    }
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (res.ok) {
        return {
          res,
          data,
        };
      } else {
        return {
          res,
          data: { message: data.message, data: {} },
        };
      }
    } catch (e) {
      if (e.name === "TypeError") {
        setTimeout(() => window.location.reload(), 500);
      }
      return;
    }
  }

  /**
   * @function get
   * @param {string} url - The endpoint to call.
   * @param {object} params - The query parameters to include in the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  get(url, params = {}, token = null) {
    return this.callApi(url, "GET", params, {}, token);
  }

  /**
   * @function post
   * @param {string} url - The endpoint to call.
   * @param {object} body - The body of the request.
   * @param {object} params - The query parameters to include in the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  post(url, body, params = {}, token = null) {
    return this.callApi(url, "POST", params, body, token);
  }

  /**
   * @function put
   * @param {string} url - The endpoint to call.
   * @param {object} body - The body of the request.
   * @param {object} params - The query parameters to include in the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  put(url, body, params = {}, token = null) {
    return this.callApi(url, "PUT", params, body, token);
  }

  /**
   * @function patch
   * @param {string} url - The endpoint to call.
   * @param {object} body - The body of the request.
   * @param {object} params - The query parameters to include in the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  patch(url, body, params = {}, token = null) {
    return this.callApi(url, "PATCH", params, body, token);
  }

  /**
   * @function delete
   * @param {string} url - The endpoint to call.
   * @param {object} params - The query parameters to include in the request.
   * @param {string} token - The authorization token.
   * @returns {Promise<object>} The response from the server.
   */
  delete(url, params = {}, token = null) {
    return this.callApi(url, "DELETE", params, {}, token);
  }
}
