import React from "react";

export default function HeroName({ heroName }) {
  if (heroName === "joker") {
    throw new Error("Not a hero!");
  }
  return <div>{heroName}</div>;
}
