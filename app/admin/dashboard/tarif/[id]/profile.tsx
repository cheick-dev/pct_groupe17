import { Button } from "@/components/ui/button";

export default function Profile({ agent }: { agent: any }) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold">
        {agent.Nom} - {agent.Prenom}
      </h1>
      <Button size="sm">Changer de photo</Button>
    </div>
  );
}
