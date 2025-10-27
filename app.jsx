import React from "react";
import { motion } from "framer-motion";

// Single-file React component for an ultra-elegant, black luxury interactive story page.
// Requirements: TailwindCSS + Framer Motion installed in the project.
// Drop this file into a Vite/Next React app and import it in a route or App.

const ACCENT = "#F08F23"; // orange accent (you can change if desired)

const sections = [
  {
    title: "1. The Beginning of the Trail",
    body:
      "It started with a sound — the soft crunch of footsteps on gravel, a rhythm that seemed to echo a heartbeat. The evening sun dipped low, painting the sky with amber and rose. In that fading light, Ethan took his first step toward the unknown, guided only by curiosity and the faint scent of cedar in the air.",
  },
  {
    title: "2. The Whispering Forest",
    body:
      "As he entered the woods, silence wrapped around him like a velvet cloak. The trees seemed alive, whispering secrets in a language older than time. Each rustle of leaves carried a story, each gust of wind felt like a warning or a welcome. Ethan couldn’t tell which — and that made it all the more thrilling.",
  },
  {
    title: "3. The Hidden Symbol",
    body:
      "Halfway through the forest, he found it — a small, carved mark on an ancient oak. It wasn’t random. It looked deliberate, like someone had left a message only the right eyes could see. He traced the lines with his fingers, feeling a strange pulse beneath the bark, as if the tree itself remembered who had carved it.",
  },
  {
    title: "4. The Stranger by the River",
    body:
      "When the path opened to a river, he wasn’t alone. A figure stood across the water, cloaked in shadow but somehow familiar. The stranger didn’t speak — only nodded once, before disappearing behind the mist. Ethan felt a spark of recognition, though he couldn’t explain why. The moment lingered like a dream he couldn’t wake from.",
  },
  {
    title: "5. The Fire and the Memory",
    body:
      "That night, Ethan built a small fire. The flames danced wildly, throwing sparks that looked like stars escaping gravity. As he watched, memories he didn’t know he had began to surface — laughter, loss, promises made under starlight. It was as if the fire was burning through time itself, revealing what had always been hidden.",
  },
  {
    title: "6. The Door of Light",
    body:
      "At dawn, he reached a clearing. There stood an arch of stone covered in moss, glowing faintly with light from within. It wasn’t just a doorway — it was an invitation. He hesitated for a heartbeat, then stepped through. The air shimmered, and the world on the other side felt both new and ancient, strange yet utterly right.",
  },
  {
    title: "7. The Return",
    body:
      "When Ethan finally emerged, the forest was gone. Or maybe, it had never existed outside his mind. He carried with him no proof — only a calm certainty that something within him had changed. The trail had not led him away from himself, but back to where he had always belonged.",
  },
];

export default function HachikoVIPStory() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Background: subtle radial glow + grain */}
      <div className="fixed inset-0 -z-10">
        <div
          aria-hidden
          className="absolute inset-0 bg-black"
          style={{ mixBlendMode: "normal" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1200px 600px at 10% 10%, rgba(240,143,35,0.06), transparent), radial-gradient(800px 500px at 90% 85%, rgba(240,143,35,0.03), transparent)",
            backdropFilter: "blur(6px)",
          }}
        />
      </div>

      {/* Fixed header */}
      <header className="fixed top-6 left-6 right-6 z-30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
            {/* logo placeholder */}
            <span className="text-sm font-semibold text-white/90">LOGO</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">Hello</p>
            <h1 className="text-sm md:text-base font-semibold tracking-tight">
              WE’RE HONORED TO WELCOME YOU
            </h1>
            <p className="text-xs md:text-sm font-medium" style={{ color: ACCENT }}>
              TO THE HACHIKO VIP CLUB
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          {sections.map((s, i) => (
            <a
              key={s.title}
              href={`#section-${i}`}
              className="text-sm text-white/50 hover:text-white transition-opacity duration-200"
            >
              {i + 1}
            </a>
          ))}
        </nav>
      </header>

      {/* Main scroll container: snap to each section */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {sections.map((s, i) => (
          <section
            id={`section-${i}`}
            key={s.title}
            className="h-screen snap-center flex items-center justify-center px-6 md:px-24"
          >
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl text-center"
            >
              <h2
                className="text-2xl md:text-4xl font-extrabold mb-6"
                style={{ color: ACCENT }}
              >
                {s.title}
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-white/90">
                {s.body}
              </p>

              {/* subtle decorative underline */}
              <div className="mt-8 h-0.5 w-28 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, rgba(240,143,35,0.95), rgba(255,255,255,0.06))' }} />
            </motion.article>

            {/* corner accent: thin glowing circle */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(400px 200px at 85% 15%, rgba(240,143,35,0.02), transparent)'
              }}
            />
          </section>
        ))}

        {/* Final minimal footer section to close elegantly */}
        <section className="h-36 flex items-center justify-center px-6 md:px-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-sm text-white/60"
          >
            <p>Thank you for following the trail. — Hachiko VIP</p>
          </motion.div>
        </section>
      </main>

      {/* Right-side progress dots */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
        {sections.map((_, idx) => (
          <a
            key={idx}
            href={`#section-${idx}`}
            className="w-3 h-3 rounded-full bg-white/20 border border-white/10 backdrop-blur-sm hover:scale-110 transition-transform"
            aria-label={`Go to section ${idx + 1}`}
          />
        ))}
      </aside>

      {/* small responsive hint */}
      <div className="fixed left-6 bottom-6 z-30 text-xs text-white/50 hidden md:block">
        Scroll to explore — each chapter is a moment
      </div>

      {/* Styles for better mobile experience */}
      <style jsx>{`
        /* Ensures the body doesn't show a white flash on some setups */
        :global(html, body, #root) {
          background: black;
        }

        /* a gentle overscroll effect on supported browsers */
        main {
          -webkit-overflow-scrolling: touch;
        }

        /* Hide scrollbar but keep scroll functionality */
        main::-webkit-scrollbar {
          width: 8px;
        }
        main::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.06);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
