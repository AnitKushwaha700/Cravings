// const restaurantUpdateProfile = async (req, res, next) => {
//   try {
//     const currentUser = req.user;
//     const restaurantData = req.body;

//     const dataKeys = Object.keys(restaurantData);

//     dataKeys.forEach((key) => {
//       if (!restaurantData[key]) {
//         const error = new Error(`Missing required field: ${key}`);
//         error.statusCode = 400;
//         return next(error);
//       }
//     });


//     const updatedRestaurant = await restaurantData.findOne({
//         managerId: currentUser._id
//     })


//   } catch (error) {
//     console.log(error.message);
//     next();
//   }
// };
