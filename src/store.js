import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user") || {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");

        axios({
          url: "http://www.vacayplanet.com/ArmageddonApi/public/api/login",
          data: user,
          method: "POST",
          onUploadProgress: uploadEvent => {
            console.log(
              "Upload event: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100)
            );
          }
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.customer;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            if (user.status != "active") {
              this.logout();
            } else {
              commit("auth_success", token, user);
              resolve(resp);
            }
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        console.log(user);
        axios({
          url: "http://www.vacayplanet.com/ArmageddonApi/public/api/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            console.log(resp.data);
            // const user = resp.data.customer;
            // localStorage.setItem("token", token);
            // localStorage.setItem('user',JSON.stringify(user)),
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    loggedInUser: state => state.user
  }
});
