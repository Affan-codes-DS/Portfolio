import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import fs from "fs";
import path from "path";

const router: IRouter = Router();
const LOCAL_DB_PATH = path.resolve(import.meta.dirname, "../../../..", "contacts.json");

// Helper to get local contacts
function getLocalContacts(): any[] {
  try {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      const data = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Failed to read local contacts:", error);
  }
  return [];
}

// Helper to save local contacts
function saveLocalContacts(contacts: any[]): void {
  try {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(contacts, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to write local contacts:", error);
  }
}

router.post("/contact", async (req, res, next) => {
  try {
    // Validate request body
    const input = SubmitContactBody.parse(req.body);

    if (process.env.DATABASE_URL) {
      // Dynamic import to prevent crash when DATABASE_URL is not set
      const { db, contactMessagesTable } = await import("@workspace/db");
      await db.insert(contactMessagesTable).values({
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
      });
    } else {
      // JSON File Fallback
      const contacts = getLocalContacts();
      const newContact = {
        id: contacts.length + 1,
        name: input.name,
        email: input.email,
        subject: input.subject,
        message: input.message,
        createdAt: new Date().toISOString(),
      };
      contacts.push(newContact);
      saveLocalContacts(contacts);
    }

    res.json({
      success: true,
      message: "Your message has been submitted successfully!",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/contacts", async (req, res, next) => {
  try {
    if (process.env.DATABASE_URL) {
      const { db, contactMessagesTable } = await import("@workspace/db");
      const messages = await db.select().from(contactMessagesTable);
      res.json(messages.map(m => ({
        id: m.id,
        name: m.name,
        email: m.email,
        subject: m.subject,
        message: m.message,
        createdAt: m.createdAt.toISOString(),
      })));
    } else {
      const contacts = getLocalContacts();
      res.json(contacts);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
