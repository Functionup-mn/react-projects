import config from "../config/config";
import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
      this.client
                 .setEndpoint(config.appWriteUrl)
                 .setProject(config.appWriteProjectId);
      this.account = new Account(this.client);           
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name)
           if(userAccount){
            // call another method
             return this.login(email, password)
           }else{
            return userAccount;
           }
        } catch (error) {
            throw error
        }
    }

    async login(email, password){
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();     // we can also use if else
        } catch (error) {
            console.log('appwrite service error: ' + error);   // after 'throw error' statement return will not work properly
        }
          return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService