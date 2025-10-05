import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // Create new user
  async createUser(name: string, age: number, grade: string): Promise<User> {
    const newUser = new this.userModel({ name, age, grade });
    return newUser.save();
  }

  // Get all users
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Get user by ID
  async getUserById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}
