import {
  blogRepository,
  blogcollectionRepository,
} from "../respositories/index.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";

const createBlog = async (req, res) => {
  const { title, content_trailer, img, author, content, collection_ } =
    await req.body;
  try {
    let collection = await blogRepository.createBlog({
      title,
      content_trailer,
      img,
      author,
      content,
      collection_,
    });
    res.status(HttpStatusCode.OK).json({
      message: collection,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getAllBlog = async (req, res) => {
  try {
    let result = await blogRepository.getAllBlog();
    res.status(HttpStatusCode.OK).json({
      message: "Get all blog ",
      data: {
        data: result,
        title: "Tất cả bài viết",
      },
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getBlogByCollection = async (req, res) => {
  const { collection_ } = req.params;
  try {
    let result = await blogRepository.getBlogByCollection({ collection_ });
    res.status(HttpStatusCode.OK).json({
      message: `Get blog bg type ${collection_}`,
      data: {
        data: result,
        title: collection_,
      },
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getBlogByCategory = async (req, res) => {
  const { collection_, category } = req.params;
  let title = collection_;
  try {
    await blogcollectionRepository.checkBlogCollection({ title });

    const result = await blogRepository.getBlogByCategory({ category });

    res.status(HttpStatusCode.OK).json({
      message: `Get blog bg category ${category}`,
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const deleteBlog = async (req, res) => {
  const { title } = await req.body;
  try {
    let collection = await blogRepository.deleteBlog({
      title,
    });
    res.status(HttpStatusCode.OK).json({
      message: collection,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

export default {
  createBlog,
  deleteBlog,
  getAllBlog,
  getBlogByCollection,
  getBlogByCategory,
};
