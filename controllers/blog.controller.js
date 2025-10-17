
const Blog = require("../models/blog");

module.exports.getBlogs=async(req,res)=>{
    try {
        let Blogs = await Blog.find({});
        return res.render('./pages/tables',{Blogs})
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.addBlog=async(req,res)=>{
    try {
        await Blog.create(req.body);
        console.log("Blog Added SuccessFully..");
        return res.redirect('/create')
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports.deleteBlog=async(req,res)=>{
    try {
        const {id} = req.params;
        await Blog.findByIdAndDelete(id)
        console.log("Blog Deleted..");
        return res.redirect('/tables')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.editBlog=async(req,res)=>{
    try {
        const {id} = req.params
        const Blogs = await Blog.findById(id)
        return res.render('./pages/edit',{Blogs})
    } catch (error) {
        console.log(error.message);
    }
}


module.exports.updateBlog=async(req,res)=>{
    try {
        const {id} = req.params;
        await Blog.findByIdAndUpdate(id,req.body)
        console.log('Blog Updated..');
        return res.redirect('/tables')
    } catch (error) {
        console.log(error.message);
    }
}

