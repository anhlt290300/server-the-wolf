// import {print, OutputType} from '../helpers/print.js'
import { Voucher } from "../models/index.js";
import Exception from "../exception/exceptions.js";

const createVoucher = async ({
  title,
  price,
  condition,
  price_content,
  condition_content,
  discount,
  time
}) => {
  const existingVoucher = await Voucher.findOne({ title }).exec();
  if (!!existingVoucher) {
    throw new Exception(Exception.VOUCHER_EXIST);
  }

  await Voucher.create({
    title,
    price,
    condition,
    price_content,
    condition_content,
    discount,
    time,
  });
  return "Create voucher!!";
};

const deleteVoucher = async ({ title }) => {
  const existingVoucher = await Voucher.findOne({ title }).exec();
  if (!!existingVoucher) {
    await Voucher.deleteOne({ title: title });
    return "Delete voucher";
  }
  throw new Exception(Exception.VOUCHER_NOT_EXIST);
};

const getAllVoucher = async () => {
  const vouchers = await Voucher.find({}).exec();
  return vouchers;
};

export default {
  createVoucher,
  deleteVoucher,
  getAllVoucher,
};
