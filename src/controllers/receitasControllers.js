const { ReceitasModel } = require("../models/receitasModel");

module.exports.insertReceitas = async (req, res, next) => {
  try {
    if (!req.body) return res.status(400).json({ message: "insert a body" });
    const Receita = new ReceitasModel({ ...req.body });

    const insertingReceita = await Receita.save();
    if (insertingReceita === null)
      return res.status(400).json({ message: "error saving data" });

    return res.status(201).json(insertingReceita);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports.getReceitas = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    // get allpages
    const allReceitas = await ReceitasModel.find({})
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    if (!allReceitas)
      return res.status(400).json({ message: "error getting data" });

    // count the docs
    const counting = await ReceitasModel.countDocuments();
    if (!counting)
      return res.status(400).json({ message: "error counting docs" });

    // return everythings
    return res.status(200).json({
      allReceitas,
      totalPages: Math.ceil(counting / limit),
      currentPage: page,
    });
  } catch (e) {
    throw new Error(e);
  }
};

module.exports.getReceitasById = async (req, res, next) => {
  const id = req.params["id"];

  const receitabyid = await ReceitasModel.find({ _id: id }).exec();
  if (!receitabyid)
    return res.status(400).json({ message: "error getting data" });

  return res.status(200).json(receitabyid);
};
