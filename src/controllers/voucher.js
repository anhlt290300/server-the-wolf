import voucherResponsity from "../respositories/voucher.js";
import HttpStatusCode from "../exception/HttpStatusCode.js";

const getAllVoucher = async (req, res) => {
  try {
    let result = await voucherResponsity.getAllVoucher();
    res.status(HttpStatusCode.OK).json({
      message: "Get all voucher",
      data: result,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const createVoucher = async (req, res) => {
  const {
    title,
    price,
    condition,
    price_content,
    condition_content,
    discount,
    time,
  } = await req.body;
  //console.log(time)
  try {
    let voucher = await voucherResponsity.createVoucher({
      title,
      price,
      condition,
      price_content,
      condition_content,
      discount,
      time,
    });
    res.status(HttpStatusCode.OK).json({
      message: voucher,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const deleteVoucher = async (req, res) => {
  const { title } = await req.body;

  try {
    let voucher = await voucherResponsity.deleteVoucher({
      title,
    });
    res.status(HttpStatusCode.OK).json({
      message: voucher,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

export default { getAllVoucher, createVoucher, deleteVoucher };
