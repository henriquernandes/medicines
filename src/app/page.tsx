import { Pacients } from "@prisma/client";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Emoji } from "~/components/ui/emoji";

import { api } from "~/trpc/server";

export default async function Home() {
  const pacientsQuery = await api.pacients.getAllPacients.query();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 md:flex-row ">
        {pacientsQuery?.map((pacient) => (
          <PacientCard key={pacient.id} data={pacient} />
        ))}
      </div>
    </main>
  );
}

async function PacientCard({ data }: { data: Pacients }) {
  return (
    <Link href={`/paciente/${data.id}`}>
      <Card className="w-full min-w-52 max-w-80 text-center">
        <CardHeader className="text-2xl font-semibold">{data.name}</CardHeader>
        <CardContent>
          <Emoji emoji={data.avatar} size="2xl" />
        </CardContent>
      </Card>
    </Link>
  );
}
