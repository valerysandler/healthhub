import { model, Schema, Document } from 'mongoose';
import { IUserModel } from './user.model';

export interface ISpecialistModel extends IUserModel {
    userId: string;
    profession: string[];
    subProfession: string[];
    description: string;
    rating: number;
    reviews: string[];
    services: string[];
    price: number;
    availability: string[];
    isAvailable: boolean;
    isOnline: boolean;
    isVerified: boolean;
    isBanned: boolean;
    isBusy: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const specialistSchema = new Schema<ISpecialistModel>({
    userId: {
        type: String,
        required: [true, 'User ID is required'],
        trim: true,
        minlength: [3, 'User ID must be at least 3 characters'],
        maxlength: [50, 'User ID must be at most 50 characters']
    },
    profession: {
        type: [String],
        required: [true, 'Profession is required'],
        trim: true,
        minlength: [3, 'Profession must be at least 3 characters'],
        maxlength: [50, 'Profession must be at most 50 characters']
    },
    subProfession: {
        type: [String],
        required: [true, 'Sub profession is required'],
        trim: true,
        minlength: [3, 'Sub profession must be at least 3 characters'],
        maxlength: [50, 'Sub profession must be at most 50 characters']
    },
    description: {
        type: String,
        required: [false, 'Description is required'],
        trim: true,
        minlength: [3, 'Description must be at least 3 characters'],
        maxlength: [500, 'Description must be at most 500 characters']
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        default: 0
    },
    reviews: {
        type: [String],
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 500
    },
    services: {
        type: [String],
        required: [true, 'Services is required'],
        trim: true,
        minlength: [3, 'Services must be at least 3 characters'],
        maxlength: [500, 'Services must be at most 500 characters']
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000,
        default: 0
    },
    availability: {
        type: [String],
        required: [true, 'Availability is required'],
        trim: true,
        minlength: [3, 'Availability must be at least 3 characters'],
        maxlength: [500, 'Availability must be at most 500 characters']
    },
    isAvailable: {
        type: Boolean,
        required: true,
        default: false
    },
    isOnline: {
        type: Boolean,
        required: true,
        default: false
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isBanned: {
        type: Boolean,
        required: true,
        default: false
    },
    isBusy: {
        type: Boolean,
        required: true,
        default: false
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

export const SpecialistModel = model<ISpecialistModel>('specialists', specialistSchema);