"use client";
import { useParams } from "next/navigation";

export default function AnimationsCategoryPage() {
  const params = useParams<{ name: string }>();
  console.log(params);

  return <></>;
}
