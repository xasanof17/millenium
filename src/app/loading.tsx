"use client";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useTheme } from "next-themes";

export default function LoadingPage() {
  const { systemTheme } = useTheme();
  return (
    <div className="flex min-h-[30vh] items-center justify-center">
      <ScaleLoader
        color={systemTheme === "dark" ? "#fff" : "#6B5AF9"}
        height={80}
        loading
        margin={3}
        radius={19}
        speedMultiplier={1}
        width={10}
      />
    </div>
  );
}
