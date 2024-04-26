import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Button } from "../ui/button"

export default async function TripPlanner() {

  return <div className="flex flex-col">
    <PlannerVibeSelector />
  </div>
}

function PlannerVibeSelector() {
  return <ToggleGroup type="single">
    <ToggleGroupItem value="romance" asChild>
      <Button variant="ghost" className={cn({
        "flex items-center gap-2": true,
        'bg-accent text-accent-foreground': pathname === href
      })}>
        Romance
      </Button>
    </ToggleGroupItem>
    <ToggleGroupItem value="beach" asChild>
      <Button>Beach</Button>
    </ToggleGroupItem>
    <ToggleGroupItem value="outdoors" asChild>
      <Button>Outdoors</Button>
    </ToggleGroupItem>
    <ToggleGroupItem value="city" asChild>
      <Button>City</Button>
    </ToggleGroupItem>
    <ToggleGroupItem value="relax" asChild>
      <Button>Relax</Button>
    </ToggleGroupItem>
  </ToggleGroup>
}



function VibeButton() {
  return <Button variant="ghost" className={cn({
    "flex items-center gap-2": true,
    'bg-accent text-accent-foreground': pathname === href
  })}>
    {children}
  </Button>
}