import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { normalUserModel, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

    /**
     * this method works normally
     */
    async getNestNumberOfUsers(): Promise<number> {
        try {
            return await this.userModel.countDocuments({});
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * This one will be never executed. and it does not throw an error
     */
    async getMongooseNumberOfUsers(): Promise<number> {
        try {
            return await normalUserModel.countDocuments({});
        } catch (error) {
            console.log(error);
        }
    }
}
