import {
  blogcollectionRepository,
  blogRepository,
} from "../respositories/index.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";
import { blogsData } from "../blogdata.js";

const createBlogCollection = async (req, res) => {
  const { title, content } = await req.body;

  try {
    let collection = await blogcollectionRepository.createBlogCollection({
      title,
      content,
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

const getAllBlogCollections = async (req, res) => {
  try {
    let result = await blogcollectionRepository.getAllBlogCollections();
    res.status(HttpStatusCode.OK).json({
      message: "Get all blog collection",
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const deleteBlogCollection = async (req, res) => {
  const { title } = await req.body;
  try {
    let collection = await blogcollectionRepository.deleteBlogCollection({
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



const insertBlog = async (req, res) => {
  const blog = blogsData;
  try {
    // let collection = await blogcollectionRepository.deleteBlogCollection({
    //   title,
    // });
    for (let i = 0; i < blog.length; i++) {
      let { data } = blog[i];
      let collection_ = blog[i].title;
      for (let j = 0; j < data.length; j++) {
        let { title, author, img, content_trailer, content, href } = data[j];
        href = href
          .replace("https://thewolf.vn/blogs/", "")
          .replace(`${collection_}/`, "");
        await blogRepository.createBlog({
          title,
          content_trailer,
          img,
          author,
          content,
          collection_,
          category: href,
        });
        // console.log(title)
      }
    }

    res.status(HttpStatusCode.OK).json({
      message: "fake blog thanh cong",
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

export default {
  createBlogCollection,
  deleteBlogCollection,
  getAllBlogCollections,
  insertBlog,
};
