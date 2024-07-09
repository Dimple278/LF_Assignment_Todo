import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError";

export const validateTaskId = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const taskId = parseInt(req.params.id);
  if (isNaN(taskId)) {
    return next(new ApiError(400, "Invalid task ID"));
  }
  next();
};

export const validateTaskBody = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title, completed } = req.body;
  if (typeof title !== "string") {
    return next(
      new ApiError(
        400,
        "Invalid task data: title is required and must be a string"
      )
    );
  }
  if (completed !== undefined && typeof completed !== "boolean") {
    return next(
      new ApiError(400, "Invalid task data: completed must be a boolean")
    );
  }
  next();
};
