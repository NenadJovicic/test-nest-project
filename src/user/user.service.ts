import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { normalUserModel, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

    async getNumberOfUsers(): Promise<number> {
        try {
            return await this.userModel.countDocuments({});
            // this return below will not be executed if you put previous line under comment
            // and it won't error also
            return await normalUserModel.countDocuments({});
        } catch (error) {
            console.log(error);
        }
    }
}
