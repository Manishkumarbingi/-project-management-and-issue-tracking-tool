import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="primary" size="sm">
        Click me
      </Button>
      <Button variant="destructive" size="sm">
        Click me
      </Button>
      <Button variant="ghost" size="sm">
        Click me
      </Button>
      <Button variant="muted" size="sm">
        Click me
      </Button>
      <Button variant="outline" size="sm">
        Click me
      </Button>
      <Button variant="teritary" size="sm">
        Click me
      </Button>
      <p className="text-red-500 font-semibold">Manish</p>
    </div>
  );
}
