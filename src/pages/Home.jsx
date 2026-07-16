import textLogo from "../assets/text-logo.png"
import flowerLogo from "../assets/flower-logo.png"

export default function Home() {
  return (
    <div className="flex flex-row justify-center align-middle space-y-4 ">
      <img className="h-86" src={flowerLogo}/>
    </div>
  );
}