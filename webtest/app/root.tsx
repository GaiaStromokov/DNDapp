import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import CharacterInfo from './components/CharacterInfo/CharacterInfo.jsx';
import Attributes from './components/Attributes/Attributes.jsx'; 
import SavingThrows from './components/SavingThrows/SavingThrows.jsx'; 
import Skills from './components/Skills/Skills.jsx';
import PlayerMisc from './components/PlayerMisc/PlayerMisc.jsx';
import CharacterDescription from './components/CharacterDescription/CharacterDescription.jsx';
import BackPack from './components/BackPack/BackPack.jsx';
import Weapons from './components/Weapons/Weapons.jsx';
import Proficiencies from './components/Proficiencies/Proficiencies.jsx';
import Abilities from './components/Abilities/Abilities.jsx';
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <CharacterInfo />
      <Attributes />
      <SavingThrows />
      <Skills />
      <PlayerMisc />
      <CharacterDescription />
      <BackPack />
      <Weapons />
      <Proficiencies />
      <Abilities />
    </div>
  );
}