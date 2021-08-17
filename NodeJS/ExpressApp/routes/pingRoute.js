let ping = (req, res) => {
  res.status(200).json({ success: true });
  return;
};

module.exports = ping;
