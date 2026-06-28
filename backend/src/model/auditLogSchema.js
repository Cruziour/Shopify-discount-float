import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    announcementText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const AuditLog = mongoose.model("AuditLog", auditLogSchema);
