import mongoose from "mongoose";
import { AuditLog } from "../model/auditLogSchema.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/index.js";
import { syncMetafieldToShopify } from "../services/shopify.service.js";

const announcementController = asyncHandler(async (req, res) => {
  const { announcementText } = req.body;

  if (!announcementText) {
    throw new ApiError(400, "Text field is required!");
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const logEntry = await AuditLog.create(
      [{ announcementText: announcementText }],
      {
        session,
      },
    );

    const shopifyData = await syncMetafieldToShopify(announcementText);

    await session.commitTransaction();
    session.endSession();

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { database: logEntry[0], shopify: shopifyData },
          "Successfully saved to MongoDB and synced to Shopify atomically!",
        ),
      );
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw new ApiError(
      error.statusCode || 500,
      `Atomic Sync Failed: All operations rolled back. Details: ${error.message}`,
    );
  }
});

export default announcementController;
