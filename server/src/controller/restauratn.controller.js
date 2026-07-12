const restaurantUpdateProfile = async (req, res, next) => {
  try {

    const currentUser = req.user;
    const restaurantData = req.body;

  } catch (error) {
    console.log(error.message);
    next();
  }
};
