"use client";
import { useSocket } from "./providers/socket-provider";
import { Badge } from "./ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge className="bg-yellow-600 text-white border-none" variant="outline">
        Fallback: Pollingg every 1s
      </Badge>
    );
  }

  return (
    <Badge className="bg-emerald-600 text-white border-none" variant="outline">
     Live : Real time update
    </Badge>
  );
};
