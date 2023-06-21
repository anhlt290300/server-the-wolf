// import {print, OutputType} from '../helpers/print.js'
import { BlogCollection } from "../models/index.js";
import Exception from "../exception/exceptions.js";

const createBlogCollection = async ({ title, content }) => {
  const existingBlogCollection = await BlogCollection.findOne({ title }).exec();
  if (!!existingBlogCollection) {
    throw new Exception(Exception.BLOG_COLLECTION_EXIST);
  }

  await BlogCollection.create({
    title,
    content,
  }).then((res) => console.log(res));
  return "Create blog collection!!";
};

const deleteBlogCollection = async ({ title }) => {
  const existingBlogCollection = await BlogCollection.findOne({ title }).exec();
  if (!!existingBlogCollection) {
    await BlogCollection.deleteOne({ title: title });
    return "Delete blog collection";
  }

  throw new Exception(Exception.BLOG_COLLECTION_NOT_EXIST);
};

const getAllBlogCollections = async () => {
  const blogCollection = await BlogCollection.find({}).exec();

  return blogCollection;
};

const checkBlogCollection = async ({ title }) => {
  const blogCollection = await BlogCollection.find({ title: title }).exec();
  if (blogCollection.length > 0) return true;
  else throw new Exception(Exception.BLOG_COLLECTION_NOT_EXIST);
};
export default {
  createBlogCollection,
  deleteBlogCollection,
  getAllBlogCollections,
  checkBlogCollection,
};
