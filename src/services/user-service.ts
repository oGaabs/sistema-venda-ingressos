import * as mysql from "mysql2/promise";
import { Database } from "../database";
import { UserModel } from "../models/user-model";

export class UserService {

  async findById(userId: number) {
    return UserModel.findById(userId);
  }

  async findByEmail(email: string) {
    return UserModel.findByEmail(email);
  }
}


//design pattern - 