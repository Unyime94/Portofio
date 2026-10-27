import { useEffect } from "react";
import { useRive, useViewModelInstanceEnum } from "@rive-app/react-canvas";

function Badge({ quality }) {
  const { rive, RiveComponent } = useRive({
    src: "/bagde.riv",
    artboard: "badge",
    stateMachines: "badgeSM", // use your state machine's actual name
    autoplay: true,
    autoBind: true, // binds the artboard's default view model instance
  });

  const { setValue } = useViewModelInstanceEnum(
    "quality", // the enum property's name in Rive
    rive?.viewModelInstance,
  );

  useEffect(() => {
    if (setValue) setValue(quality);
  }, [quality, rive, setValue]);

  return <RiveComponent />;
}

// const TIERS = ["bronze", "silver", "gold"];s

function App() {
  // const [quality, setQuality] = useState("gold");

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold">Unyime Kona.</h1>
        <p className="text-3xl font-bold">Frontend Development.</p>
        <p className="text-3xl font-bold">Motion & Interaction Design.</p>
      </section>

      <section className="mt-95 flex">
        <div>
          <h2 className="font-bold">Saver Tier Badge</h2>
          <p className="mt-4 w-[50%] text-black">
            One Rive component with three instances (Gold, Silver and Bronze)
            that makes status instantly readable and adds a small moment of
            delight to the savings UI. Because it's a single component driven by
            Rive's state machine, the app can switch tiers in real time, and the
            design stays consistent across every screen.
          </p>
          <p className="mt-4">[Rive] [React]</p>
        </div>
        <div className="h- w-full">
          <Badge quality="silver" />
        </div>
      </section>
    </>
  );
}

export default App;
