import { SceneTimeline } from "@/components/scene-timeline";
import Image from "next/image";

const characters = [
  {
    name: "Officer Snowball",
    role: "Ever-optimistic lawcat",
    detail: "Believes in teamwork, butterflies, and bold declarations.",
    color: "var(--character-snowball)"
  },
  {
    name: "Ricky Rat",
    role: "Street-dance enthusiast",
    detail: "Breaks dance moves, not laws, but balance is optional.",
    color: "var(--character-ricky)"
  },
  {
    name: "Gogo",
    role: "Corn-loving pigeon",
    detail: "Dreams of serenity and uninterrupted snacking.",
    color: "var(--character-gogo)"
  },
  {
    name: "Scooter Squirrel",
    role: "Flashy scofflaw",
    detail: "Too cool for sidewalks, too fast for justice.",
    color: "var(--character-squirrel)"
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__text">
          <p className="hero__kicker">Tall Tails Gazette</p>
          <h1>Officer Snowball vs. the Scooter Squirrel</h1>
          <p className="hero__lede">
            A sunshiney vow, a rebellious rodent, a worried pigeon, and a scooter-bound outlaw. The result? A
            slapstick masterpiece played out on a single sleepy street.
          </p>
        </div>
        <div className="hero__badge">
          <span className="hero__badge-emoji" role="img" aria-label="Police badge">
            🛡️
          </span>
          <p className="hero__badge-text">“Today, NO one will break the law!”</p>
          <span className="hero__badge-from">— Officer Snowball</span>
        </div>
      </section>

      <section className="characters" aria-labelledby="character-roster">
        <div className="characters__header">
          <h2 id="character-roster">Cast of Chaotic Characters</h2>
          <p>Meet the crew who almost caught the speediest squirrel in town.</p>
        </div>
        <div className="characters__grid">
          {characters.map((character) => (
            <article key={character.name} className="character-card" style={{ borderColor: character.color }}>
              <div className="character-card__header">
                <h3>{character.name}</h3>
                <p className="character-card__role">{character.role}</p>
              </div>
              <p className="character-card__detail">{character.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <SceneTimeline />

      <section className="squirrel-bio">
        <div className="squirrel-bio__art" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
            alt=""
            width={320}
            height={320}
            priority
          />
        </div>
        <div className="squirrel-bio__copy">
          <h2>Behind the Shades</h2>
          <p>
            The scooter squirrel is an enigma in sunglasses. Legend says it learned to ride by outrunning sprinklers,
            and that its scooter is charged solely by stolen sunflower seeds. Some think it’s a vigilante—others call
            it a menace. Everyone agrees it has style.
          </p>
          <ul className="squirrel-bio__facts">
            <li>Top speed: “Fast enough to make Snowball gasp.”</li>
            <li>Signature catchphrase: “Catch me if you can!”</li>
            <li>Biggest fear: Helmet hair.</li>
          </ul>
        </div>
      </section>

      <section className="wrap-up">
        <h2>Moral of the Morning</h2>
        <p>
          The law wasn’t enforced, the corn wasn’t reclaimed, and the squirrel is probably doing donuts around the
          bakery. But friendships were strengthened by shared embarrassment—and honestly, that counts for something.
        </p>
        <p>
          Officer Snowball still believes in teamwork, Ricky is workshopping a scooter-proof dance routine, and Gogo’s
          posting “Corn Watch” flyers on every lamp post. Somewhere, the scooter squirrel winks from behind those
          shades, already planning tomorrow’s joyride.
        </p>
      </section>
    </main>
  );
}
