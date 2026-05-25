"use client";

import { useMemo, useState } from "react";
import { links, workspaces } from "@/mock/data";

export function useMockLinkStore() {
  const [query, setQuery] = useState("");
  const [workspace, setWorkspace] = useState("All");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesWorkspace = workspace === "All" || link.workspace === workspace;
      const matchesQuery = [link.destination, link.shortUrl, link.workspace]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesWorkspace && matchesQuery;
    });
  }, [query, workspace]);

  return {
    query,
    setQuery,
    workspace,
    setWorkspace,
    workspaces,
    links: filteredLinks
  };
}
