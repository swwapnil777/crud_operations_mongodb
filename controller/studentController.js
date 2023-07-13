import studentModel from "../models/Student.js";

class studentController {
  static createDoc = async (req, res) => {
    const { name, age, fees } = req.body;
    try {
      const doc = new studentModel({
        name: name,
        age: age,
        fees: fees,
      });
      await doc.save();
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllDoc = async (req, res) => {
    const result = await studentModel.find();
    try {
      res.render("index", { result });
    } catch (error) {
      console.log(error);
    }
  };

  static editDoc = async (req, res) => {
    const id = req.params.id;
    const result = await studentModel.findById(req.params.id);
    //console.log(result);
    res.render("edit", { data: result });
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
  static deleteDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndRemove(req.params.id);
      res.redirect("/student");
    } catch (error) {
      console.log(error);
    }
  };
}
export default studentController;
