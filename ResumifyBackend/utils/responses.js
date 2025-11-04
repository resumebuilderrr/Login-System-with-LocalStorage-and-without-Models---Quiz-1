export const badRequest = (res, errors) => {
  return res.status(400).json({ success: false, errors });
};

export const serverError = (res, msg = "Server Error") => {
  return res.status(500).json({ success: false, message: msg });
};
