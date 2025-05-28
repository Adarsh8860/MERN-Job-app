const express = require('express');
const router = express.Router();
const JobModel = require('./JobsModel');

// Create a new job
router.post('/create', async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const job = await JobModel.create(req.body);
    console.log("Saved job:", job);
    res.status(201).json({ success: true, msg: "Job creation successful", data: job });
  } catch (error) {
    console.error("Internal Server Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ✅ Delete a job by ID
router.delete('/jobs/:id', async (req, res) => {
  try {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ msg: "Job not found" });

    res.status(200).json({ msg: "Job deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
