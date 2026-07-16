import ExcelJS from "exceljs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Data structure for the sheets
const sheetsData = {
  Auth: {
    themeColor: "FF1F4E78", // Dark Navy Blue
    title: "Cravings API Documentation - Authentication & Account Management",
    rows: [
      {
        component: "Auth",
        endpoint: "POST /auth/register",
        description: "Registers a new user profile on the platform. Accessible to all user types (customer, rider, restaurant, admin).",
        requestBody: JSON.stringify({
          fullName: "Aniket Kushwaha",
          email: "aniket@gmail.com",
          password: "securepassword123",
          phone: "9876543210",
          gender: "male",
          dob: "2000-01-01",
          userType: "customer"
        }, null, 2),
        response: JSON.stringify({
          message: "User Created Successfully"
        }, null, 2),
        successMessage: "User Created Successfully",
        errors: "400 Bad Request (All fields Required)\n499 Conflict (Email already registered)"
      },
      {
        component: "Auth",
        endpoint: "POST /auth/login",
        description: "Authenticates a user and issues a JSON Web Token stored in an HttpOnly cookie named 'Oreo'.",
        requestBody: JSON.stringify({
          email: "aniket@gmail.com",
          password: "securepassword123"
        }, null, 2),
        response: JSON.stringify({
          message: "Welcome Back",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e5d1",
            fullName: "Aniket Kushwaha",
            email: "aniket@gmail.com",
            phone: "9876543210",
            dob: "2000-01-01T00:00:00.000Z",
            gender: "male",
            photo: {
              url: "https://placehold.co/600x400?text=A",
              publicId: null
            },
            userType: "customer",
            createdAt: "2026-07-16T00:00:00.000Z",
            updatedAt: "2026-07-16T00:00:00.000Z"
          }
        }, null, 2),
        successMessage: "Welcome Back",
        errors: "400 Bad Request (All fields Required)\n404 Not Found (Email not registered)\n401 Unauthorized (Incorrect Password)"
      },
      {
        component: "Auth",
        endpoint: "GET /auth/logout",
        description: "Clears the active session token ('Oreo') cookie, logging the user out.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Logout Successfully"
        }, null, 2),
        successMessage: "Logout Successfully",
        errors: "500 Internal Server Error"
      },
      {
        component: "Auth",
        endpoint: "POST /auth/send-otp",
        description: "Generates a random 6-digit OTP, hashes it, saves it in the database, and sends it via email for password recovery.",
        requestBody: JSON.stringify({
          email: "aniket@gmail.com"
        }, null, 2),
        response: JSON.stringify({
          message: "OTP sent on 'aniket@gmail.com'"
        }, null, 2),
        successMessage: "OTP sent on 'email'",
        errors: "400 Bad Request (Email is required)\n404 Not Found (Email not registered)"
      },
      {
        component: "Auth",
        endpoint: "POST /auth/verify-otp",
        description: "Validates the OTP sent to email. If valid, deletes the OTP record and sets an HttpOnly cookie named 'kitkat' containing the temporary reset token.",
        requestBody: JSON.stringify({
          email: "aniket@gmail.com",
          otp: "123456"
        }, null, 2),
        response: JSON.stringify({
          message: "OTP verified. Create You New Password Now"
        }, null, 2),
        successMessage: "OTP verified. Create You New Password Now",
        errors: "400 Bad Request (Email is required)\n401 Unauthorized (OTP Expired / Incorrect OTP)\n404 Not Found (Email not registered)"
      },
      {
        component: "Auth",
        endpoint: "POST /auth/reset-password",
        description: "Resets the user password. Requires the request to contain the 'kitkat' reset cookie.",
        requestBody: JSON.stringify({
          newPassword: "newpassword123"
        }, null, 2),
        response: JSON.stringify({
          message: "Password Changed"
        }, null, 2),
        successMessage: "Password Changed",
        errors: "401 Unauthorized (Session Expired / cookie missing)"
      }
    ]
  },
  Common: {
    themeColor: "FF3F6A9B", // Medium Steel Blue
    title: "Cravings API Documentation - Common Profile & Security Management",
    rows: [
      {
        component: "Common",
        endpoint: "PUT /common/edit-profile",
        description: "Updates general user profile details (fullName, phone) and optionally uploads a new display picture. Auth protected (requires cookie 'Oreo').",
        requestBody: "Multipart Form Data:\n- email: 'aniket@gmail.com'\n- fullName: 'Aniket Kushwaha'\n- phone: '9876543210'\n- displayPic: [File/Image upload]",
        response: JSON.stringify({
          message: "User Updated Successfully",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e5d1",
            fullName: "Aniket Kushwaha",
            email: "aniket@gmail.com",
            phone: "9876543210",
            photo: {
              url: "https://res.cloudinary.com/Cravings678/profile/xyz.png",
              publicId: "Cravings678/profile/xyz"
            },
            userType: "customer"
          }
        }, null, 2),
        successMessage: "User Updated Successfully",
        errors: "400 Bad Request (All fields Required)\n401 Unauthorized (Session Expired / cookie missing)\n404 Not Found (User record not found)"
      },
      {
        component: "Common",
        endpoint: "PATCH /common/change-password",
        description: "Changes the password of the authenticated user. Auth protected (requires cookie 'Oreo').",
        requestBody: JSON.stringify({
          oldPassword: "securepassword123",
          newPassword: "newpassword123"
        }, null, 2),
        response: JSON.stringify({
          message: "Password updated successfully"
        }, null, 2),
        successMessage: "Password updated successfully",
        errors: "400 Bad Request (All fields Required / Old password is incorrect)\n401 Unauthorized (Session Expired / cookie missing)"
      }
    ]
  },
  Public: {
    themeColor: "FF3B8E30", // Forest Green
    title: "Cravings API Documentation - Public / Guest Endpoints",
    rows: [
      {
        component: "Public",
        endpoint: "POST /public/contact-us",
        description: "Submits contact/inquiry form message. Saved in backend database.",
        requestBody: JSON.stringify({
          fullName: "Jane Doe",
          email: "jane@gmail.com",
          phone: "9876543210",
          subject: "Restaurant Listing",
          message: "Hi, I would like to get my fast food outlet listed on Cravings. Please call me back."
        }, null, 2),
        response: JSON.stringify({
          message: "Thanks for Contacting us! You will hear back from us soon"
        }, null, 2),
        successMessage: "Thanks for Contacting us! You will hear back from us soon",
        errors: "400 Bad Request (All fields Required)"
      },
      {
        component: "Public",
        endpoint: "GET /public/restaurants",
        description: "Retrieves list of all active restaurants in the system. Accessible without logging in.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Restaurants fetched successfully",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e5e2",
              restaurantName: "Burger Palace",
              address: "Sector 62, Noida",
              cuisineType: ["Burgers", "Fast Food"],
              rating: 4.5,
              coverImage: {
                url: "https://res.cloudinary.com/..."
              }
            }
          ]
        }, null, 2),
        successMessage: "Restaurants fetched successfully",
        errors: "500 Internal Server Error"
      },
      {
        component: "Public",
        endpoint: "GET /public/restaurants/:id",
        description: "Retrieves the profile details and full menu items of a specific restaurant by its database ID.",
        requestBody: "None (URL parameter: id)",
        response: JSON.stringify({
          message: "Restaurant details fetched successfully",
          data: {
            restaurant: {
              _id: "64b0f3e2b2f6b8a1c8f1e5e2",
              restaurantName: "Burger Palace",
              address: "Sector 62, Noida",
              cuisineType: ["Burgers", "Fast Food"],
              minOrderAmount: 150
            },
            menu: [
              {
                _id: "64b0f3e2b2f6b8a1c8f1e6f9",
                name: "Cheese Burger Special",
                description: "Juicy single patty cheese burger with custom sauces",
                price: 180,
                category: "Veg",
                isAvailable: true
              }
            ]
          }
        }, null, 2),
        successMessage: "Restaurant details fetched successfully",
        errors: "404 Not Found (Restaurant not found)\n500 Internal Server Error"
      }
    ]
  },
  Restaurant: {
    themeColor: "FFE26A1C", // Orange/Chocolate
    title: "Cravings API Documentation - Restaurant Management",
    rows: [
      {
        component: "Restaurant",
        endpoint: "POST /restaurant/update-profile",
        description: "Creates a new restaurant profile or updates an existing one for the logged-in manager. Uploads a single cover photo and multiple gallery photos. Requires 'Oreo' cookie (User must be of type 'restaurant').",
        requestBody: "Multipart Form Data:\n- restaurantName: 'Burger Palace'\n- address: 'Sector 62, Noida'\n- contactNumber: '9988776655'\n- cuisineType: ['Burgers', 'Fast Food']\n- openingHours: '11:00 AM - 11:00 PM'\n- minOrderAmount: 150\n- coverImage: [Single image upload]\n- restaurantImage: [Multiple images upload (max 10)]",
        response: JSON.stringify({
          message: "Restaurant profile updated successfully",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e5e2",
            managerId: "64b0f3e2b2f6b8a1c8f1e5d1",
            restaurantName: "Burger Palace",
            address: "Sector 62, Noida",
            contactNumber: "9988776655",
            cuisineType: ["Burgers", "Fast Food"],
            coverImage: {
              url: "https://res.cloudinary.com/.../coverPhoto.jpg",
              publicId: "..."
            },
            restaurantImage: [
              {
                url: "https://res.cloudinary.com/.../restaurantPhotos/pic1.jpg",
                publicId: "..."
              }
            ]
          }
        }, null, 2),
        successMessage: "Restaurant profile updated successfully OR Restaurant profile created successfully",
        errors: "400 Bad Request (Missing required field: ...)\n401 Unauthorized (Session Expired)\n403 Forbidden (Unauthorized Access - User type must be restaurant)"
      },
      {
        component: "Restaurant",
        endpoint: "GET /restaurant/get-resturant-data",
        description: "Fetches restaurant profile data of the logged-in manager. The query parameter 'id' must match the manager's ID. Requires 'Oreo' cookie (User must be of type 'restaurant').",
        requestBody: "None (Query parameter: id = manager's User ID)",
        response: JSON.stringify({
          message: "Restaurant Fetched Successfully",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e5e2",
              managerId: "64b0f3e2b2f6b8a1c8f1e5d1",
              restaurantName: "Burger Palace",
              address: "Sector 62, Noida",
              contactNumber: "9988776655",
              cuisineType: ["Burgers", "Fast Food"]
            }
          ]
        }, null, 2),
        successMessage: "Restaurant Fetched Successfully / No restaurant Data Found",
        errors: "401 Unauthorized (Unauthorized Access)\n403 Forbidden (Unauthorized Access)\n500 Internal Server Error"
      },
      {
        component: "Restaurant",
        endpoint: "POST /restaurant/menu",
        description: "Adds a new food item to the restaurant's menu. Requires 'Oreo' cookie (User must be of type 'restaurant').",
        requestBody: JSON.stringify({
          name: "Cheese Burger Special",
          description: "Juicy single patty cheese burger with custom sauces",
          price: 180,
          category: "Veg",
          isAvailable: true
        }, null, 2),
        response: JSON.stringify({
          message: "Menu item added successfully",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e6f9",
            restaurantId: "64b0f3e2b2f6b8a1c8f1e5e2",
            name: "Cheese Burger Special",
            description: "Juicy single patty cheese burger with custom sauces",
            price: 180,
            category: "Veg",
            isAvailable: true
          }
        }, null, 2),
        successMessage: "Menu item added successfully",
        errors: "400 Bad Request (Validation failed)\n401 Unauthorized (Session Expired)\n403 Forbidden (Unauthorized Access)"
      },
      {
        component: "Restaurant",
        endpoint: "PUT /restaurant/menu/:itemId",
        description: "Updates an existing food item in the menu. Requires 'Oreo' cookie (User must be of type 'restaurant').",
        requestBody: JSON.stringify({
          price: 195,
          isAvailable: false
        }, null, 2),
        response: JSON.stringify({
          message: "Menu item updated successfully",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e6f9",
            name: "Cheese Burger Special",
            price: 195,
            isAvailable: false
          }
        }, null, 2),
        successMessage: "Menu item updated successfully",
        errors: "404 Not Found (Menu item not found)\n401 Unauthorized (Session Expired)\n403 Forbidden (Unauthorized Access)"
      },
      {
        component: "Restaurant",
        endpoint: "DELETE /restaurant/menu/:itemId",
        description: "Permanently removes a menu item from the database. Requires 'Oreo' cookie (User must be of type 'restaurant').",
        requestBody: "None",
        response: JSON.stringify({
          message: "Menu item deleted successfully"
        }, null, 2),
        successMessage: "Menu item deleted successfully",
        errors: "404 Not Found (Menu item not found)\n401 Unauthorized (Session Expired)\n403 Forbidden (Unauthorized Access)"
      }
    ]
  },
  Customer: {
    themeColor: "FF7D3C98", // Purple
    title: "Cravings API Documentation - Customer Dashboard & Orders",
    rows: [
      {
        component: "Customer",
        endpoint: "GET /customer/profile",
        description: "Retrieves the logged-in customer's specific profile and address book. Requires cookie 'Oreo'.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Customer profile fetched",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e5c2",
            customerId: "64b0f3e2b2f6b8a1c8f1e5d1",
            isActive: true,
            status: "verified",
            addressBook: [
              {
                _id: "64b0f3e2b2f6b8a1c8f1e5c3",
                name: "Home",
                address: "Flat 204, Rosewood Apts",
                city: "Noida",
                state: "UP",
                pinCode: "201301",
                country: "India",
                addressType: "home",
                isDefault: true
              }
            ]
          }
        }, null, 2),
        successMessage: "Customer profile fetched",
        errors: "401 Unauthorized (Session Expired)\n404 Not Found (Customer details not found)"
      },
      {
        component: "Customer",
        endpoint: "POST /customer/address",
        description: "Adds a new delivery address to the customer's address book. Requires cookie 'Oreo'.",
        requestBody: JSON.stringify({
          name: "Office",
          address: "Building B, Cyber City",
          city: "Gurugram",
          state: "Haryana",
          pinCode: "122002",
          country: "India",
          addressType: "work" // Options: home, work, other
        }, null, 2),
        response: JSON.stringify({
          message: "Address added successfully",
          data: [
            {
              name: "Home",
              address: "Flat 204, Rosewood Apts",
              city: "Noida",
              addressType: "home",
              isDefault: true
            },
            {
              name: "Office",
              address: "Building B, Cyber City",
              city: "Gurugram",
              addressType: "work",
              isDefault: false
            }
          ]
        }, null, 2),
        successMessage: "Address added successfully",
        errors: "400 Bad Request (Missing fields)\n401 Unauthorized (Session Expired)"
      },
      {
        component: "Customer",
        endpoint: "DELETE /customer/address/:addressId",
        description: "Deletes a saved delivery address from the customer's address book. Requires cookie 'Oreo'.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Address deleted successfully"
        }, null, 2),
        successMessage: "Address deleted successfully",
        errors: "404 Not Found (Address ID not found)\n401 Unauthorized (Session Expired)"
      },
      {
        component: "Customer",
        endpoint: "POST /customer/orders",
        description: "Places a new food order. Links customer, restaurant, menu items, and handles payment mode selection. Requires cookie 'Oreo'.",
        requestBody: JSON.stringify({
          restaurantId: "64b0f3e2b2f6b8a1c8f1e5e2",
          items: [
            {
              menuItemId: "64b0f3e2b2f6b8a1c8f1e6f9",
              quantity: 2
            }
          ],
          deliveryAddress: {
            address: "Flat 204, Rosewood Apts",
            city: "Noida",
            state: "UP",
            pinCode: "201301",
            country: "India",
            addressType: "home"
          },
          totalAmount: 360,
          paymentMode: "COD" // Options: COD, Card, NetBanking
        }, null, 2),
        response: JSON.stringify({
          message: "Order placed successfully",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e712",
            orderId: "CRV-20260716-102",
            restaurantId: "64b0f3e2b2f6b8a1c8f1e5e2",
            customerId: "64b0f3e2b2f6b8a1c8f1e5d1",
            items: [{ menuItemId: "64b0f3e2b2f6b8a1c8f1e6f9", quantity: 2 }],
            totalAmount: 360,
            orderStatus: "placed",
            createdAt: "2026-07-16T00:10:00.000Z"
          }
        }, null, 2),
        successMessage: "Order placed successfully",
        errors: "400 Bad Request (Invalid quantities or inactive restaurant)\n401 Unauthorized (Session Expired)"
      },
      {
        component: "Customer",
        endpoint: "GET /customer/orders",
        description: "Retrieves order history and active orders for the customer. Requires cookie 'Oreo'.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Orders fetched successfully",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e712",
              orderId: "CRV-20260716-102",
              restaurantId: {
                restaurantName: "Burger Palace"
              },
              totalAmount: 360,
              orderStatus: "placed",
              createdAt: "2026-07-16T00:10:00.000Z"
            }
          ]
        }, null, 2),
        successMessage: "Orders fetched successfully",
        errors: "401 Unauthorized (Session Expired)"
      }
    ]
  },
  Rider: {
    themeColor: "FF138D90", // Teal
    title: "Cravings API Documentation - Rider Dashboard & Deliveries",
    rows: [
      {
        component: "Rider",
        endpoint: "GET /rider/profile",
        description: "Fetches detailed rider profile including vehicle details, verification documents, availability, and rating. Requires cookie 'Oreo' (userType: 'rider').",
        requestBody: "None",
        response: JSON.stringify({
          message: "Rider profile fetched",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e801",
            riderId: "64b0f3e2b2f6b8a1c8f1e5d3",
            vehicleDetails: {
              vehicleType: "Bike",
              vehicleNumber: "DL3S-AB-1234",
              vehicleModel: "Pulsar 150",
              vehicleColor: "Black"
            },
            status: "active",
            averageRating: 4.9,
            isAvailable: true,
            currentLocation: {
              lat: "28.6139",
              lon: "77.2090"
            }
          }
        }, null, 2),
        successMessage: "Rider profile fetched",
        errors: "401 Unauthorized (Session Expired)\n404 Not Found (Rider profile not found)"
      },
      {
        component: "Rider",
        endpoint: "PATCH /rider/availability",
        description: "Toggles the rider availability status (online/offline) for receiving food delivery jobs. Requires cookie 'Oreo'.",
        requestBody: JSON.stringify({
          isAvailable: false
        }, null, 2),
        response: JSON.stringify({
          message: "Availability status updated",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e801",
            isAvailable: false
          }
        }, null, 2),
        successMessage: "Availability status updated",
        errors: "400 Bad Request (Invalid parameters)\n401 Unauthorized (Session Expired)"
      },
      {
        component: "Rider",
        endpoint: "PATCH /rider/location",
        description: "Updates rider's current geographic coordinates for real-time tracking by customers. Requires cookie 'Oreo'.",
        requestBody: JSON.stringify({
          lat: "28.6145",
          lon: "77.2099"
        }, null, 2),
        response: JSON.stringify({
          message: "Location updated successfully"
        }, null, 2),
        successMessage: "Location updated successfully",
        errors: "400 Bad Request (Invalid parameters)\n401 Unauthorized (Session Expired)"
      },
      {
        component: "Rider",
        endpoint: "GET /rider/deliveries",
        description: "Retrieves active or completed delivery jobs assigned to the rider. Requires cookie 'Oreo'.",
        requestBody: "None",
        response: JSON.stringify({
          message: "Deliveries fetched",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e712",
              orderId: "CRV-20260716-102",
              restaurantId: {
                restaurantName: "Burger Palace",
                address: "Sector 62, Noida"
              },
              deliveryAddress: "Flat 204, Rosewood Apts",
              totalAmount: 360,
              deliveryStatus: "assigned"
            }
          ]
        }, null, 2),
        successMessage: "Deliveries fetched",
        errors: "401 Unauthorized (Session Expired)"
      },
      {
        component: "Rider",
        endpoint: "PATCH /rider/deliveries/:orderId",
        description: "Updates the status of a specific delivery (e.g. accepted, picked_up, delivered). Requires cookie 'Oreo'.",
        requestBody: JSON.stringify({
          status: "picked_up"
        }, null, 2),
        response: JSON.stringify({
          message: "Delivery status updated",
          data: {
            _id: "64b0f3e2b2f6b8a1c8f1e712",
            deliveryStatus: "picked_up"
          }
        }, null, 2),
        successMessage: "Delivery status updated",
        errors: "400 Bad Request (Invalid status parameter)\n401 Unauthorized (Session Expired)\n404 Not Found (Delivery order not found)"
      }
    ]
  },
  Admin: {
    themeColor: "FF800000", // Maroon
    title: "Cravings API Documentation - System Administration & Analytics",
    rows: [
      {
        component: "Admin",
        endpoint: "GET /admin/users",
        description: "Retrieves a list of all users in the system with optional filters for userType, status, etc. Requires cookie 'Oreo' (userType: 'admin').",
        requestBody: "None (Query parameters: userType = customer/rider/restaurant, status = verified/suspended, page = 1, limit = 10)",
        response: JSON.stringify({
          message: "Users fetched successfully",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e5d1",
              fullName: "John Doe",
              email: "john@example.com",
              userType: "customer",
              createdAt: "2026-07-15T18:00:00.000Z"
            }
          ]
        }, null, 2),
        successMessage: "Users fetched successfully",
        errors: "401 Unauthorized (Session Expired)\n403 Forbidden (Admin privileges required)"
      },
      {
        component: "Admin",
        endpoint: "PATCH /admin/users/:userId/status",
        description: "Updates a user account status (e.g. verified, suspended, blocked). Requires cookie 'Oreo' (userType: 'admin').",
        requestBody: JSON.stringify({
          status: "suspended"
        }, null, 2),
        response: JSON.stringify({
          message: "User status updated successfully"
        }, null, 2),
        successMessage: "User status updated successfully",
        errors: "400 Bad Request (Invalid status)\n401 Unauthorized (Session Expired)\n403 Forbidden (Admin privileges required)\n404 Not Found (User not found)"
      },
      {
        component: "Admin",
        endpoint: "GET /admin/restaurants",
        description: "Lists all restaurants including those pending validation/approval. Requires cookie 'Oreo' (userType: 'admin').",
        requestBody: "None",
        response: JSON.stringify({
          message: "Restaurants fetched successfully",
          data: [
            {
              _id: "64b0f3e2b2f6b8a1c8f1e5e2",
              restaurantName: "Burger Palace",
              isApproved: false,
              status: "pending"
            }
          ]
        }, null, 2),
        successMessage: "Restaurants fetched successfully",
        errors: "401 Unauthorized (Session Expired)\n403 Forbidden (Admin privileges required)"
      },
      {
        component: "Admin",
        endpoint: "PATCH /admin/restaurants/:restaurantId/status",
        description: "Approves or rejects a restaurant listing on the platform. Requires cookie 'Oreo' (userType: 'admin').",
        requestBody: JSON.stringify({
          status: "approved"
        }, null, 2),
        response: JSON.stringify({
          message: "Restaurant status updated successfully"
        }, null, 2),
        successMessage: "Restaurant status updated successfully",
        errors: "400 Bad Request (Invalid status)\n401 Unauthorized (Session Expired)\n403 Forbidden (Admin privileges required)\n404 Not Found (Restaurant not found)"
      },
      {
        component: "Admin",
        endpoint: "GET /admin/analytics",
        description: "Aggregates site-wide financial metrics and user/restaurant stats. Requires cookie 'Oreo' (userType: 'admin').",
        requestBody: "None",
        response: JSON.stringify({
          message: "Analytics fetched successfully",
          data: {
            totalSales: 1284500,
            activeOrders: 42,
            totalCustomers: 1205,
            totalRiders: 145,
            totalRestaurants: 87
          }
        }, null, 2),
        successMessage: "Analytics fetched successfully",
        errors: "401 Unauthorized (Session Expired)\n403 Forbidden (Admin privileges required)"
      }
    ]
  }
};

async function main() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Cravings API Documentation Generator";
  workbook.lastModifiedBy = "Antigravity Agent";
  workbook.created = new Date();
  workbook.modified = new Date();

  const borderStyle = {
    top: { style: "thin", color: { argb: "FFCCCCCC" } },
    left: { style: "thin", color: { argb: "FFCCCCCC" } },
    bottom: { style: "thin", color: { argb: "FFCCCCCC" } },
    right: { style: "thin", color: { argb: "FFCCCCCC" } }
  };

  for (const [sheetName, sheetConfig] of Object.entries(sheetsData)) {
    const worksheet = workbook.addWorksheet(sheetName, {
      views: [{ showGridLines: true }]
    });

    // 1. Add Title Banner
    worksheet.mergeCells("A1:G1");
    const titleCell = worksheet.getCell("A1");
    titleCell.value = sheetConfig.title;
    titleCell.font = {
      name: "Segoe UI",
      family: 4,
      size: 16,
      bold: true,
      color: { argb: "FFFFFFFF" }
    };
    titleCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: sheetConfig.themeColor }
    };
    titleCell.alignment = {
      vertical: "middle",
      horizontal: "center"
    };
    worksheet.getRow(1).height = 40;

    // 2. Add an empty spacer row
    worksheet.getRow(2).height = 15;

    // 3. Add Headers Row (Row 3)
    const headers = [
      "Component",
      "API Endpoint",
      "Description",
      "Request Body",
      "Response",
      "Success Message",
      "Errors"
    ];
    worksheet.getRow(3).values = headers;
    worksheet.getRow(3).height = 28;

    // Apply header styles
    for (let i = 1; i <= 7; i++) {
      const cell = worksheet.getCell(3, i);
      cell.font = {
        name: "Segoe UI",
        size: 11,
        bold: true,
        color: { argb: "FFFFFFFF" }
      };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF333333" } // Dark Charcoal headers for contrast
      };
      cell.alignment = {
        vertical: "middle",
        horizontal: "center"
      };
      cell.border = borderStyle;
    }

    // 4. Set Column Options & Widths
    worksheet.columns = [
      { key: "component", width: 15 },
      { key: "endpoint", width: 30 },
      { key: "description", width: 45 },
      { key: "requestBody", width: 50 },
      { key: "response", width: 50 },
      { key: "successMessage", width: 30 },
      { key: "errors", width: 40 }
    ];

    // 5. Add Data Rows (starting from Row 4)
    sheetConfig.rows.forEach((rowData, index) => {
      const addedRow = worksheet.addRow({
        component: rowData.component,
        endpoint: rowData.endpoint,
        description: rowData.description,
        requestBody: rowData.requestBody,
        response: rowData.response,
        successMessage: rowData.successMessage,
        errors: rowData.errors
      });

      // Height of data row - give it extra space for code formatting
      addedRow.height = 135; // Default height for rows with JSON

      // Style cells in this row
      for (let i = 1; i <= 7; i++) {
        const cell = addedRow.getCell(i);
        cell.font = {
          name: "Segoe UI",
          size: 10
        };
        cell.alignment = {
          vertical: "top",
          horizontal: "left",
          wrapText: true
        };
        cell.border = borderStyle;

        // Special Styling for endpoint column to make HTTP methods pop out
        if (i === 2) {
          const endpointText = cell.value || "";
          cell.font = {
            name: "Consolas",
            size: 10,
            bold: true
          };
          if (endpointText.startsWith("POST")) {
            cell.font.color = { argb: "FF0B5FFF" }; // Blue for POST
          } else if (endpointText.startsWith("GET")) {
            cell.font.color = { argb: "FF2E7D32" }; // Green for GET
          } else if (endpointText.startsWith("PUT")) {
            cell.font.color = { argb: "FFE65100" }; // Orange for PUT
          } else if (endpointText.startsWith("PATCH")) {
            cell.font.color = { argb: "FFD84315" }; // Red-orange for PATCH
          } else if (endpointText.startsWith("DELETE")) {
            cell.font.color = { argb: "FFC62828" }; // Red for DELETE
          }
        }

        // Special monospace formatting for JSON fields (Request Body and Response)
        if (i === 4 || i === 5) {
          cell.font = {
            name: "Consolas",
            size: 9,
            color: { argb: "FF444444" }
          };
        }
      }
    });
  }

  // Save the workbook to workspace root
  const outputPath = path.join(__dirname, "..", "Cravings_API_Documentation.xlsx");
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Successfully generated Excel API Documentation at: ${outputPath}`);
}

main().catch((err) => {
  console.error("Error generating API Documentation Excel workbook:", err);
  process.exit(1);
});
