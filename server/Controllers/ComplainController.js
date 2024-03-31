const complainModel = require("../Models/ComplainModel")

// Controller function to handle complaint save
const saveComplain = async (req, res) => {
    try {
      const { stuID, name, query } = req.body;
      
      // Create a new Complain document
      const newComplain = new complainModel({
        stuID,
        name,
        query
      });
  
      // Save the document to the database
      await newComplain.save();
  
      res.status(201).json({ message: 'Complaint registered successfully' });
    } catch (error) {
      console.error('Error while saving complaint:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  const getComplaints = async (req, res) => {
    try {
      // Fetch all complaints from the database
      const complaints = await complainModel.find();
  
      res.status(200).json(complaints);
    } catch (error) {
      console.error('Error while fetching complaints:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  


  const updateComplaintResponse = async (req, res) => {
    const { id } = req.params;
    const { response } = req.body;
  
    try {
      const updatedComplaint = await complainModel.findOneAndUpdate(
        { _id: id },
        { response: response },
        { new: true }
      );
  
      if (!updatedComplaint) {
        return res.status(404).json({ error: 'Complaint not found' });
      }
  
      return res.status(200).json(updatedComplaint);
    } catch (error) {
      console.error('Error updating complaint response:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  // import ReplyPopup from "./Replypopup";
module.exports = {
    saveComplain,
    getComplaints,
    updateComplaintResponse
  };