import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const UserData = [
  {
    fullname: "Manager1",
    email: "Manager1@gmail.com",
    password: bcrypt.hash("StrongPassword@123", 10),
    dob: "2000-01-01",
    gender: "Male",
    userType: "restaurant",
    phone: "8989898989",
    photo: {
      url: "https://placehold.co/600x400?text=Restaurant",
      publicId: null,
    },
  },
  {
    fullname: "Customer1",
    email: "Customer1@gmail.com",
    password: bcrypt.hash("StrongPassword@123", 10),
    dob: "2000-01-01",
    gender: "Male",
    userType: "customer",
    phone: "8989898989",
    photo: {
      url: "https://placehold.co/600x400?text=customer",
      publicId: null,
    },
  },
  {
    fullname: "Rider1",
    email: "Rider1@gmail.com",
    password: bcrypt.hash("StrongPassword@123", 10),
    dob: "2000-01-01",
    gender: "Male",
    userType: "rider",
    phone: "8989898989",
    photo: {
      url: "https://placehold.co/600x400?text=rider",
      publicId: null,
    },
  },
];

const userSeed = async () => {
  try {
    const existingRestaurant = await User.findOne({ email: UserData[0].email });

    if (existingRestaurant) {
      console.log("Existing Restaurant Found");
      console.log("Deleting Existing Restaurant");

      await existingRestaurant.deleteOne();
    }

    console.log("Creating New Restaurant");

    const newUser = await User.create(UserData[0]);
    console.log("Restaurant Created Successfully");
  } catch (error) {
    console.log("Restaurant not Created");

    throw error;
  }
};

export default userSeed;
