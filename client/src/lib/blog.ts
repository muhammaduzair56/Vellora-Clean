// Vellora Clean style reminder: practical, calm and locally relevant; this is original editorial content, not copied from reference sites.
export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-quiet-reset-deep-cleaning-guide",
    category: "Deep cleaning",
    date: "06 Sep 2026",
    title: "The quiet reset: a practical deep-cleaning guide",
    excerpt: "A calm, room-by-room way to make a one-off deep clean feel manageable and genuinely restorative.",
    image: "/manus-storage/vellora-blog-deep-clean_a92577aa.png",
    readTime: "5 min read",
    intro: "A deep clean should feel like a reset rather than a race. The most useful approach is to work in a considered order, giving the high-touch and high-build-up areas the attention they need.",
    sections: [
      { heading: "Start with the surfaces you see every day", body: "Clear the room before you clean it. Remove loose items, group what belongs elsewhere, and create a simple working surface. This lets you notice the details that are easy to miss when a room feels busy." },
      { heading: "Work high to low", body: "Dust shelves, frames and light fittings before moving down to skirting boards and floors. It keeps the final pass efficient and avoids undoing work you have already done." },
      { heading: "Finish with the small signals of care", body: "Polished handles, clean switches, fresh towels and clear glass are small details, but they change how a space feels. A thoughtful finish is what turns a clean into a reset." },
    ],
  },
  {
    slug: "why-clear-windows-change-a-room",
    category: "Window cleaning",
    date: "02 Sep 2026",
    title: "Why clear windows change the feeling of a room",
    excerpt: "Light, glass and the final details that make a freshly cared-for home feel brighter from the first look.",
    image: "/manus-storage/vellora-blog-window-clean_0dcebe64.png",
    readTime: "4 min read",
    intro: "Window cleaning is often treated as a finishing job, but clear glass changes the atmosphere of a room. It lets daylight travel further and makes the whole space feel more intentional.",
    sections: [
      { heading: "The difference is in the light", body: "Streaks and residue soften the amount of light a room receives. A clean pane helps a space feel clearer without adding anything new to it." },
      { heading: "Use the right rhythm", body: "A regular light clean is easier to maintain than waiting for a heavy build-up. For larger homes and commercial spaces, a simple schedule keeps the finish consistent." },
      { heading: "Do not forget the edges", body: "Frames, sills and handles are where the eye notices unfinished work. Cleaning these areas alongside the glass creates a more complete result." },
    ],
  },
  {
    slug: "a-smoother-end-of-tenancy-reset",
    category: "Moving home",
    date: "28 Aug 2026",
    title: "A smoother end-of-tenancy reset",
    excerpt: "The practical details that help tenants, landlords and property teams prepare a home for its next chapter.",
    image: "/manus-storage/vellora-blog-tenancy_348df171.png",
    readTime: "6 min read",
    intro: "End-of-tenancy cleaning is part presentation, part process. A clear checklist helps everyone understand what needs attention before keys change hands.",
    sections: [
      { heading: "Start with the handover points", body: "Prioritise kitchens, bathrooms, floors, windows and touchpoints. These are the areas most likely to be noticed during an inspection or viewing." },
      { heading: "Leave the next person a clean start", body: "Inside cupboards, appliance fronts and skirting boards can make a property feel cared for. A reset should look complete, not just tidy from the doorway." },
      { heading: "Allow time for a final look", body: "Build in a short final walk-through. It is the best moment to catch small marks, missed glass and the details that make a handover feel finished." },
    ],
  },
];
