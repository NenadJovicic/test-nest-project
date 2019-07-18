import { Document, Model, model, Schema } from 'mongoose';

export const UserSchema: Schema = new Schema({
    givenName: {
        type: String,
        required: [true, 'first_name_required']
    },
    familyName: {
        type: String,
        required: [true, 'last_name_required']
    }
});

export class UserDb {
    givenName: string;
    familyName: string;
}

UserSchema.loadClass(UserDb);

export interface UserDocument extends UserDb, Document {}

export const normalUserModel: Model<UserDocument> = model('user', UserSchema);
