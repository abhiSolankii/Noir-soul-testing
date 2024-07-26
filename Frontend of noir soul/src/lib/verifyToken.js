import jwt from "jsonwebtoken";

export function verifyToken(token) {
  if (!token) {
    throw new Error("No token provided");
  }

  try {
    // Decode the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId; // Assuming userId is stored in the token payload
  } catch (error) {
    throw new Error("Invalid token");
  }
}
