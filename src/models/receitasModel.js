const { model, Schema } = require("mongoose");

const ReceitasSchema = new Schema(
  {
    titulo: { type: String, required: true },
    tempoPreparo: { type: Number, required: false },
    porcoes: { type: Number, required: false },
    image: {type: String, required: false}
  },
  { versionKey: false, autoIndex: true }
);

const ReceitasModel = model("ReceitasModel", ReceitasSchema);

module.exports = { ReceitasModel };
