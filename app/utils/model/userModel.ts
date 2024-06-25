import { model } from "mongoose";
import { Document, Schema, models } from "mongoose";

interface iuser {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface iuserData extends iuser, Document {}

const userModel = new Schema<iuserData>(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const userData = models.Users || model<iuserData>("Users", userModel);

export default userData;
