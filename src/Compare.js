import React from 'react';
import { fullPokedex } from './pokeData';

export default function Compare() {
  let evolutions = [];
  fullPokedex.map((poke) => {
    poke.next_evolution && poke.next_evolution.length >= 2 && evolutions.push(poke);
  });
  console.log(evolutions);
  return <div>compare</div>;
}
