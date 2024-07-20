const express = require("express");
const {
  login_controller,
  signup_controller,
  check_auth_controller,
} = require("../controllers/auth_controllers");
const {
  check_auth_middleware,
} = require("../middleware/check_auth_middleware");
const { create_post_controller, get_all_posts_controller, edit_post_controller, delete_post_controller, get_all_posts_controller_For_Owais, create_Project_controller, get_all_project_controller, sendMessage, getAllMessages, addTask, welcome } = require("../controllers/posts_controllers");


const router = express.Router();

router.post("/signup", signup_controller);
router.get("/wel", welcome);
router.post("/login", login_controller);




// ------------------ update --> added midddleware --------------------
router.use(check_auth_middleware)
// --------------------

// Route to check authentication status
router.get("/check-auth",check_auth_middleware, check_auth_controller);
// In this route, the check_auth_middleware is passed before invoking the check_auth_controller.
// This middleware ensures that the user is authenticated before accessing the route.

// Route to create a new post, requires authentication



router.post("/post", create_post_controller)
router.post("/project", create_Project_controller)
router.post("/message", sendMessage)
router.post('/tasks', addTask);
// In this route, check_auth_middleware is passed before invoking create_post_controller.
// This ensures that the user is authenticated and any necessary validations for creating a post are performed before accessing the route.
router.get("/post", get_all_posts_controller)
router.get("/project", get_all_project_controller)
router.get("/message", getAllMessages)
router.put("/post/:id", edit_post_controller)
router.delete("/post/:id", delete_post_controller)








module.exports = router;