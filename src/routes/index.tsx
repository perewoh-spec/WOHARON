import { createFileRoute } from "@tanstack/react-router";
import WoharonApp from "@/app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woharon — Digital Agency" },
      {
        name: "description",
        content:
          "Woharon Digital Agency builds websites, brands, automation and AI systems for ambitious businesses.",
      },
      { property: "og:title", content: "Woharon — Digital Agency" },
      {
        property: "og:description",
        content:
          "Websites, branding, automation and AI systems. One team, one invoice, zero handoffs.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: WoharonApp,
});
