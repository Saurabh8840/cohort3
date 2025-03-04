import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

export const authenticateUser = (req: CustomRequest, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1]; // Bearer Token
  
    if (!token) {
      res.status(401).json({ success: false, message: "Access Denied. No token provided." });
      return; //  Ensure function exits here
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decoded as { userId: number }; //  Add type assertion for decoded JWT
      next(); //  Proceed to next middleware
    } catch (error) {
      res.status(403).json({ success: false, message: "Invalid token." });
      return; //  Ensure function exits here
    }
    
  };
  
