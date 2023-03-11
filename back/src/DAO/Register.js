import ApplicationModel from "./ApplicationModel.js";

export default class Register extends ApplicationModel {
    id; name; email; password;

    static configurar() {
        Register.associar('id', 'ID')
        Register.associar('name', 'NAME')
        Register.associar('email', 'EMAIL')
        Register.associar('password', 'PASSWORD')
    }
}