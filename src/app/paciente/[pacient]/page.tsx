import FormMedicine from "~/components/FormMedicine";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { api } from "~/trpc/server";

type MedicinesProps = {
  params: {
    pacient: string;
  };
};

export default async function Medicines({ params }: MedicinesProps) {
  const medicinesQuery = await api.medicines.getAllMedicinesFromPacient.query({
    pacient_id: parseInt(params.pacient),
  });

  const pacientQuery = await api.pacients.getPacientById.query({
    id: parseInt(params.pacient),
  });

  return (
    <div className="flex items-center justify-center py-5">
      <Card className="w-full max-w-screen-md">
        <CardHeader className="text-2xl font-semibold">
          <CardTitle>{pacientQuery?.name}</CardTitle>
          <CardDescription>Medicamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Intervalos da dosagem</TableCell>
                <TableCell>Quantidade</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicinesQuery?.map((medicine) => (
                <TableRow key={medicine.id}>
                  <TableCell>{medicine.name}</TableCell>
                  <TableCell>{medicine.interval}</TableCell>
                  <TableCell>{medicine.quantity}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <FormMedicine />
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
