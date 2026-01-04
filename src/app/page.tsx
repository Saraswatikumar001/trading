import GuestLayout from "@/components/layouts/guestLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <GuestLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Link href="/pulse" className="text-blue-500 underline">
          <Button variant="secondary">
            Go to Pulse Page
          </Button>
        </Link>
      </div>
    </GuestLayout>
  );
}
