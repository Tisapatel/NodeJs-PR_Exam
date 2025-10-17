const express = require('express');
const { loginPage ,signupPage, homePage, formPage, signup, login, logout, tablePage,} = require('../controllers/auth.controller');
const userAuth = require('../middlewares/auth.middleware');
const { addBlog, getBlogs, deleteBlog, updateBlog, editBlog } = require('../controllers/blog.controller');
const router = express.Router();

router.get('/',loginPage)
router.get('/signup',signupPage)
router.get('/dashboard',userAuth,homePage)
router.get('/create',formPage)
router.get('/logout',logout)
router.get('/tables',tablePage)
router.post('/signup',signup)
router.post('/',login)
router.post('/create',addBlog)
router.get('/',getBlogs)
router.get('/delete/:id',deleteBlog)
router.post('/update/:id',updateBlog)
router.get('/edit/:id',editBlog)

module.exports = router