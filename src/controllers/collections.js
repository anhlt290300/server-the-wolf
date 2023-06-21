import collectionRepository from "../respositories/collections.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";
import productRepository from "../respositories/product.js";

const getProductByType = async (req, res) => {
  const { type } = req.params;

  //console.log(type);
  try {
    let products = await productRepository.getProductByType({
      type,
    });
    res.status(HttpStatusCode.OK).json({
      message: `already get product by type ${type}`,
      data: products,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const createCollection = async (req, res) => {
  const { title, collectionChildArr } = await req.body;

  try {
    let collection = await collectionRepository.createCollection({
      title,
      collectionChildArr,
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

const getAllCollections = async (req, res) => {
  try {
    let result = await collectionRepository.getAllCollections();
    res.status(HttpStatusCode.OK).json({
      message: "Get all collections",
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const createCollectionChild = async (req, res) => {
  const { title_collection, title_collection_child } = await req.body;

  try {
    let collection = await collectionRepository.createCollectionChild({
      title_collection,
      title_collection_child,
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

const deleteCollection = async (req, res) => {
  const { title } = await req.body;
  try {
    let collection = await collectionRepository.deleteCollection({
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

const deleteCollectionChild = async (req, res) => {
  const { title_collection, title_collection_child } = await req.body;
  try {
    let collection = await collectionRepository.deleteCollectionChild({
      title_collection,
      title_collection_child,
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
  getProductByType,
  createCollection,
  createCollectionChild,
  getAllCollections,
  deleteCollection,
  deleteCollectionChild,
};
