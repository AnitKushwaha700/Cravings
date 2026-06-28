export const AutProtect = async (req, resizeBy, next) => {
  try {
    //controller logic
    next();
  } catch (error) {
    console.log(error.message);
    const error = new Error("Unknown Error at Middleware");
    error.statusCode = 500;
    next(error);
  }
};
