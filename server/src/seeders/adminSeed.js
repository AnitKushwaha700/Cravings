import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const AdminUser = {
  fullname: "Admin",
  email: "Admin@gmail.com",
  password: bcrypt.hash("StrongPassword@123", 10),
  dob: "2000-01-01",
  gender: "Male",
  userType: "admin",
  phone: "8989898989",
  photo: {
    url: "https://placehold.co/600x400?text=Admin",
    publicId: null,
  },
};

const adminSeed = async () => {
  try {
    const existingAdmin = await User.findOne({ email: AdminUser.email });

    if (existingAdmin) {
      console.log("Existing User Found");
      console.log("Deleting Existing User");

      await existingAdmin.deleteOne();
    }

    console.log("Creating New Admin");

    const newAdmin = await User.create(AdminUser);
    console.log("Admin Created Successfully");
  } catch (error) {
    console.log("Admin not Created");

    throw error;
  }
};

export default adminSeed;
