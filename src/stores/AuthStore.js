import { makeAutoObservable,observable, action } from 'mobx';


class AuthStore {
    isAuthenticated = false;  //default state of the store

    constructor() {
        makeAutoObservable(this,{isAuthenticated:observable, login: action}); // we are telling mobex to track this
    }

    login(username, password) {
       
        if (username === "admin" && password === "admin") {
            this.isAuthenticated = true;
            return true;
        }
        return false;
    }

    logout() {
        this.isAuthenticated = false;
    }
}

const authStore = new AuthStore(); // we never use store directly instead we always pass the instance of the store to component
 export default authStore;
//export default new AuthStore();

