// import {print, OutputType} from '../helpers/print.js'
import { Blog, BlogCollection } from "../models/index.js";
import Exception from "../exception/exceptions.js";

const createBlog = async ({
  title,
  content_trailer,
  img,
  author,
  content,
  collection_,
  category,
}) => {
  const existingBlog = await Blog.findOne({ title }).exec();
  if (!!existingBlog) {
    throw new Exception(Exception.BLOG_EXIST);
  }

  await Blog.create({
    title,
    content_trailer,
    img,
    author,
    content,
    collection_,
    category,
  });
  return "Create blog collection!!";
};

const getBlogByCollection = async ({ collection_ }) => {
  const existingBlogCollection = await BlogCollection.findOne({
    title: collection_,
  }).exec();
  if (!existingBlogCollection) {
    throw new Exception(Exception.BLOG_COLLECTION_NOT_EXIST);
  }

  const data = await Blog.find({ collection_: collection_ });
  return data;
};

const getBlogByCategory = async ({ category }) => {
  const existingBlog = await Blog.findOne({
    category: category,
  }).exec();
  if (!existingBlog) {
    throw new Exception(Exception.BLOG_NOT_EXIST);
  }

  return existingBlog;
};
const deleteBlog = async ({ title }) => {
  const existingBlog = await Blog.findOne({ title }).exec();
  if (!!existingBlog) {
    await Blog.deleteOne({ title: title });
    return "Delete blog collection";
  }

  throw new Exception(Exception.BLOG_NOT_EXIST);
};

const getAllBlog = async () => {
  const blog = await Blog.find({}).exec();

  return blog.slice(0,10);
};

export default {
  createBlog,
  deleteBlog,
  getAllBlog,
  getBlogByCollection,
  getBlogByCategory,
};
