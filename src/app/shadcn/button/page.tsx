'use client';
import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <Button variant="outline" size="lg" onClick={() => alert('clicked!')}>
      버튼
    </Button>
  );
}