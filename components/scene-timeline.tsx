'use client';

import { useState } from "react";

type Scene = {
  id: string;
  title: string;
  summary: string;
  quotes: Array<{ speaker: string; line: string }>;
  takeaway: string;
};

const scenes: Scene[] = [
  {
    id: "morning",
    title: "Sunny Oath",
    summary:
      "Officer Snowball proclaims a crime-free day, pointing specifically at Ricky Rat and Gogo.",
    quotes: [
      { speaker: "Officer Snowball", line: "Today, NO one will break the law! Especially you two." },
      { speaker: "Ricky Rat", line: "Bro, I don’t break laws… I break dance moves!" },
      { speaker: "Gogo", line: "I just want peace. Every day someone steals my corn!" }
    ],
    takeaway: "The day starts with promises, protests, and a little corn-based frustration."
  },
  {
    id: "screech",
    title: "Scooter Shock",
    summary:
      "A sunglass-clad squirrel screeches by on a mini scooter, taunting the trio with a daring challenge.",
    quotes: [{ speaker: "Scooter Squirrel", line: "Catch me if you can!" }],
    takeaway: "The first lawbreaker appears before the oath echo fades away."
  },
  {
    id: "chase",
    title: "Chaotic Pursuit",
    summary:
      "Each hero attempts a chase: Ricky trips, Gogo flutters in place, and Snowball gets distracted by a butterfly.",
    quotes: [
      { speaker: "Narrator", line: "Ricky trips over his own tail." },
      { speaker: "Narrator", line: "Gogo gives a heroic hop—and that’s it." },
      { speaker: "Narrator", line: "Snowball sprints... then wanders after a butterfly." }
    ],
    takeaway: "Their teamwork is heartfelt but hilariously ineffective."
  },
  {
    id: "aftermath",
    title: "Street-Side Debrief",
    summary:
      "The trio regroups, panting and embarrassed, as the squirrel disappears into legend.",
    quotes: [
      { speaker: "Gogo", line: "This town is doomed…" },
      { speaker: "Ricky Rat", line: "Nah bro… THIS is the entertainment!" },
      { speaker: "Officer Snowball", line: "Teamwork makes the dream work!" }
    ],
    takeaway: "Failure becomes friendship fodder, and the town’s chaos turns into comedy."
  }
];

export function SceneTimeline() {
  const [activeSceneId, setActiveSceneId] = useState<Scene["id"]>(scenes[0]?.id ?? "");

  const activeScene = scenes.find((scene) => scene.id === activeSceneId) ?? scenes[0];

  return (
    <section className="scene-timeline">
      <header className="scene-timeline__header">
        <p>Turn-by-turn chaos from the most optimistic oath in town.</p>
      </header>

      <nav className="scene-timeline__nav" aria-label="Story beats">
        {scenes.map((scene) => {
          const isActive = scene.id === activeSceneId;
          return (
            <button
              key={scene.id}
              type="button"
              className={`scene-timeline__tab${isActive ? " scene-timeline__tab--active" : ""}`}
              onClick={() => setActiveSceneId(scene.id)}
            >
              <span className="scene-timeline__tab-index">{String(scenes.indexOf(scene) + 1).padStart(2, "0")}</span>
              <span>{scene.title}</span>
            </button>
          );
        })}
      </nav>

      <article className="scene-timeline__content" aria-live="polite">
        <h3>{activeScene.title}</h3>
        <p className="scene-timeline__summary">{activeScene.summary}</p>
        <ul className="scene-timeline__quotes">
          {activeScene.quotes.map((quote) => (
            <li key={`${activeScene.id}-${quote.speaker}`} className="scene-timeline__quote">
              <strong>{quote.speaker}:</strong> <span>{quote.line}</span>
            </li>
          ))}
        </ul>
        <p className="scene-timeline__takeaway">{activeScene.takeaway}</p>
      </article>
    </section>
  );
}
