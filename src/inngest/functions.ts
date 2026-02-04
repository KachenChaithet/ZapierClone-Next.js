import { prisma } from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // fetching the video
    await step.sleep("wait-a-moment", "5s");

    // Transcripbing
    await step.sleep("transcripbing", "5s");

    // Sending Transcription to ai
    await step.sleep("sending-transcription", "5s");

    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "workflow-form-inngest",

        }
      })
    })
  },
);