// import {print, OutputType} from '../helpers/print.js'
import { Collection } from "../models/index.js";
import Exception from "../exception/exceptions.js";

const createCollection = async ({ title, collectionChildArr }) => {
  const existingCollection = await Collection.findOne({ title }).exec();
  if (!!existingCollection) {
    throw new Exception(Exception.COLLECTION_EXIST);
  }

  await Collection.create({
    title,
    collectionChildArr,
  });
  return "Create collection!!";
};

const deleteCollection = async ({ title }) => {
  const existingCollection = await Collection.findOne({ title }).exec();
  if (!!existingCollection) {
    await Collection.deleteOne({ title: title });
    return "Delete collection";
  }

  throw new Exception(Exception.COLLECTION_NOT_EXIST);
};

const createCollectionChild = async ({
  title_collection,
  title_collection_child,
}) => {
  const existingCollection = await Collection.findOne({
    title: title_collection,
  }).exec();
  if (!existingCollection) {
    throw new Exception(Exception.COLLECTION_NOT_EXIST);
  }
  let cols = [];
  let collection = await Collection.findOne({ title: title_collection }).exec();

  cols = collection.collectionChildArr;

  if (cols.length !== 0) {
    const existingCollectionChilden = cols.find(
      (el) => el.title === title_collection_child
    );
    if (!!existingCollectionChilden) {
      throw new Exception(Exception.COLLECTION_CHILD_EXIST);
    } else {
      cols = [...cols, { title: title_collection_child }];
      await Collection.updateOne(
        { title: title_collection },
        { collectionChildArr: cols }
      );
      return "Create collection child";
    }
  } else {
    cols = [...cols, { title: title_collection_child }];
    await Collection.updateOne(
      { title: title_collection },
      { collectionChildArr: cols }
    );
    return "Create collection child";
  }
};

const deleteCollectionChild = async ({
  title_collection,
  title_collection_child,
}) => {
  if (title_collection_child.length < 4) {
    throw new Exception(Exception.COLLECTION_CHILD_TOO_SLOW);
  }

  const existingCollection = await Collection.findOne({
    title: title_collection,
  }).exec();

  if (!existingCollection) {
    throw new Exception(Exception.COLLECTION_NOT_EXIST);
  }

  let cols = [];
  let collection = await Collection.findOne({ title: title_collection }).exec();

  cols = collection.collectionChildArr;

  if (cols.length !== 0) {
    const existingCollectionChilden = cols.find(
      (el) => el.title === title_collection_child
    );
    //console.log(!!existingCollectionChilden)
    if (!!existingCollectionChilden) {
      cols = cols.filter((el) => el.title !== title_collection_child);
      //console.log(cols);
      await Collection.updateOne(
        { title: title_collection },
        { collectionChildArr: cols }
      );
    } else {
      throw new Exception(Exception.COLLECTION_CHILD_NOT_EXIST);
    }
  } else {
    throw new Exception(Exception.COLLECTION_CHILD_NOT_EXIST);
  }

  return "delete collection child!!";
  //return collection.collectionChildArr;
};

const getAllCollections = async () => {
  const collections = await Collection.find({}).exec();
  return collections;
};

export default {
  createCollection,
  getAllCollections,
  createCollectionChild,
  deleteCollection,
  deleteCollectionChild,
};
