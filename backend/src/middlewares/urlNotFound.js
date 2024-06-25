export const urlNotFound = (req, res) => {
  res.status(404).json({ message: 'Not found' });
};
