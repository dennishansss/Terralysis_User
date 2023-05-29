const imageController = (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: 'No image provided' });
  } else {
    const imageUrl = req.file.filename;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    res.json({
      image: imageUrl,
      url: `http://localhost:8000/${imageUrl}`,
      created_at: createdAt,
      updated_at: updatedAt,
    });
  }
};

export default imageController;
