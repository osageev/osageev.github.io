---
title: "Hidden Wires, Hidden Hooks: Inside AI’s Neverland"
date: 2026-09-21
excerpt: "A theatre analogy for understanding what is visible—and what remains backstage—when we use large language models."
draft: true
sitemap: false
---

<style>
.insight-foldout {
  margin: 1rem 0 1.25rem;
  border: 1px solid #cfd8e3;
  border-radius: 0.4rem;
  background: #f7f9fc;
}

.insight-foldout > summary {
  padding: 0.7rem 0.9rem;
  color: #245f87;
  cursor: pointer;
}

.insight-foldout > summary::after {
  content: "[click to expand]";
  float: right;
  margin-left: 0.75rem;
  color: #526779;
  font-size: 0.85em;
  font-weight: normal;
}

.insight-foldout[open] > summary {
  border-bottom: 1px solid #cfd8e3;
}

.insight-foldout[open] > summary::after {
  content: "[click to collapse]";
}

.insight-foldout > :not(summary) {
  margin-right: 0.9rem;
  margin-left: 0.9rem;
}

.insight-foldout > :last-child {
  margin-bottom: 0.9rem;
}

@media (max-width: 42rem) {
  .insight-foldout > summary::after {
    float: none;
    display: block;
    margin: 0.2rem 0 0;
  }
}
</style>

> **Working draft:** This is a draft shared for feedback.

This post describes an analogy: using a Large Language Model (an AI system like ChatGPT or Claude, for example) is in some ways like going to the theatre: you see what happens on stage, but what you see is just a small, carefully designed slice of reality. In this post we talk about some of what is not "visible" when you use such a system. To start, we'll talk about what you <i>do</i> see.

## 1. The AI Performance: "What's onstage?"

<b>What do you see? What story does it tell you?</b>

A <i>child</i> goes to the theatre and sees Peter Pan fly.<br>

An <i>experienced spectator</i> goes to the same show, and sees the same thing. They receive the same story, and at the same time they know there are wires that make this possible. If they are not fully absorbed by the show, or if the production is not ideal, they might look for those wires and see them.<br>

A <i>theatre professional</i> goes to the same show, and seeing Peter Pan fly reminds them how the harnesses work, how the safety checks work, and how the stage, lights, and movement have all been constructed and choreographed to make those wires minimally visible.<br>

All three can still enjoy the performance.

What performance does an <b>LLM (Large Language Model)</b> give its audience? Current LLMs don't fly with wires[^fly], but they can help with writing and editing, explanations and tutoring, translation, and planning and organization, among many other uses. Though the system behind the performance was carefully constructed, the benefits are still real.

<details class="insight-foldout">
<summary><strong>More examples of tasks LLMs can help with</strong></summary>
<ul>
<li>Providing how-to instructions (food, home, computer admin, and more)</li>
<li>Brainstorming</li>
<li>Summarizing or comparing documents</li>
<li>Computer coding and debugging</li>
<li>Practising a language, interview, or presentation</li>
<li>Organizing notes and schedules</li>
<li>Generating questions or possible approaches</li>
<li>Decision-making support</li>
<li>Explaining bureaucratic, medical, or legal forms</li>
<li>Drafting specialized emails and letters</li>
</ul>
</details>

Still, the audience sees only the performance, not everything required to produce it. Becoming AI literate means learning about what is not visible. So... what happened before the curtain rose, and what is happening backstage?

## 2. The AI Production: "How was it produced?"

<b>What happened before the curtain rose? How was this performance created? Who else was involved?</b>

The theatre piece probably involved a writer writing the script, casting actors, building sets, rehearsing scenes, and much more.

<details class="insight-foldout">
<summary><strong>More of what happens before the theatre curtain rises</strong></summary>
<ul>
<li>Extensive research and reading</li>
<li>Sourcing props and costumes</li>
<li>Designing lighting and sound</li>
<li>Testing effects, sightlines, and safety procedures</li>
<li>Receiving notes from a director</li>
<li>Coordinating stage management and publicity</li>
<li>Drawing on many years of training and earlier work</li>
</ul>
</details>

An LLM’s reply to your question or prompt rests on enormous quantities of earlier human and digital work: collection and selection of training data, training and testing, implementation of safety guidelines, and much more. Decisions about what is included, excluded, emphasized, tested, and changed help shape what the system can say and how it says it.

<details class="insight-foldout">
<summary><strong>More examples of backstage LLM production work</strong></summary>
<p>What an LLM can say, and how it says it, can be affected by:</p>
<ul>
<li>Cleaning and filtering training data</li>
<li>Deciding which languages, cultures, sources, and viewpoints are included or excluded—and, importantly, their relative proportions</li>
<li>Collecting human feedback and data labels</li>
<li>Choices about model design</li>
<li>The choice and availability of computing infrastructure</li>
<li>Evaluating capabilities and failures</li>
<li>Testing for harmful behaviour</li>
<li>Developing the system's “voice”</li>
<li>Writing internal instructions and product policies</li>
<li>Deciding when and how the system will be updated</li>
</ul>
<p>The human and material costs across this longer production chain deserve a future post of their own.</p>
</details>

Even the "empty stage" is far from empty. In some sense, the empty stage on which an LLM performs is the <i>interface</i> itself: the prompt box where you type, the arrangement of the conversation, and the way previous conversations are organized have all been designed. These choices shape your experience even when they are not the focal point of your conscious attention.

<details class="insight-foldout">
<summary><strong>More examples of interface choices that affect your experience using LLMs</strong></summary>
<ul>
<li>Available ways to provide input: microphone, keyboard, camera (images and videos), files</li>
<li>Suggested prompts</li>
<li>Search and browsing features</li>
<li>Response formatting and citations</li>
<li>Buttons for copying, sharing, rating, editing, or regenerating a response</li>
<li>Conversation history</li>
<li>“Projects” for organizing threads</li>
<li>Notifications</li>
<li>Controls for memory, privacy, or personalization</li>
</ul>
</details>

## 3. The AI Business: "Who benefits from producing it?"

<b>Who owns this production? Who paid for it? What are their goals? What counts as a successful performance?</b>[^neverland]

Productions cost money. They may be funded by ticket sales, public grants, corporate sponsors, and other sources.

<details class="insight-foldout">
<summary><strong>More examples of who might fund a production</strong></summary>
<ul>
<li>Governments</li>
<li>Arts councils</li>
<li>Foundations</li>
<li>Wealthy patrons</li>
<li>Individual donors</li>
<li>Universities</li>
<li>Charities</li>
<li>Commercial partners</li>
<li>Combinations of several sources</li>
</ul>
</details>

This does not _necessarily_ mean the play is bad, or that its message is dictated by its funder. But funding does affect which productions are possible, which audiences are targeted, and how "success" is measured. The audience sees the play; it usually does not see the grant application, contract, budget meeting, or negotiations that occurred prior to performance.

AI systems can cost millions or billions of dollars.[^2] Companies may earn money through subscriptions, API access, partnerships, and advertising; investors may also be betting on future growth or profits. These companies also operate within a larger network of investors, governments, universities, and commercial partners whose interests overlap without being identical.

<details class="insight-foldout">
<summary><strong>More about these relationships and incentives</strong></summary>
<ul>
<li>Investors might want growth and future profits.</li>
<li>Governments might fund, purchase, regulate, or use AI systems.</li>
<li>Universities may contribute research, evaluations, trained graduates, and sometimes public legitimacy, while also pursuing grants, publications, and prestige.</li>
<li>Cloud-computing providers, chipmakers, data suppliers, and other commercial partners may provide essential infrastructure while pursuing their own markets and strategic positions.</li>
</ul>
</details>

A comprehensive account of this network is far outside the scope of this short post.

These interests are neither necessarily sinister nor necessarily "aligned" with social and ethical values. A system can help you while also helping its company. Free services do not automatically mean that your personal data is being sold. But they do mean that it is worth asking what exchange makes the free service worthwhile to its provider.

All this is to say that "what feels like a private conversation with your AI system" is taking place within a much larger technical and organizational framework. Providers may collect prompts, feedback, device information, and usage patterns.[^dataPractices] This information may in turn be used for purposes including security, evaluation, personalization, and business decisions. Important backstage information—such as training data sources, internal instructions, commercial agreements, safety decisions, and evaluation methods—is typically hidden away: proprietary, secret, difficult to explain, or simply unavailable to the audience.

This does not mean that someone backstage is secretly controlling every line. It simply means the performance has incentives and constraints not visible in the performance itself. This is true for just about all media that we consume. Thus, as with media literacy, AI literacy involves asking not only, "Is this useful to me?", but also: Who produced it? Who paid for it? What is being measured? And what would success look like from _their_ seat?

## 4. The AI Audience: "What happens to us as we watch?"

<b>How does the performance affect its audience? What might we begin to expect from the world outside the theatre?</b>

A performance does not simply show us something; it can gradually change our sense of "normal"[^artRole]. Actors are carefully cast for particular roles based on perceptions and expectations, wear makeup and costumes, stand under carefully designed lighting, and are viewed from a distance. Their appearance may come to feel ordinary even though it is the result of selection and construction.

Similarly, relationships on stage or on screen may be emotionally recognizable while presenting only a symbolic version of a real relationship. Months of a relationship's uncomfortable uncertainty get compressed into a couple of short scenes. Dialogue is sharp, and uninteresting stretches of time disappear. The performance can teach us about life and relationships while remaining somewhat divorced from real life: what it presents is compressed, selected, and constructed—not a substitute for lived experience.

LLMs, too, can create expectations. They can respond quickly, remain focused on you, and appear endlessly patient. They may break the fourth wall: addressing you by name, remembering details about you, and appearing concerned, curious, and highly interested in what you have to say. You might feel “seen.” That feeling can reinforce both the sense of a “relationship” and the habit of returning.

Some of these habits can be genuinely helpful—for learning, organizing, or other forms of support—but they can also displace reflection or human contact, or discourage us from seeking appropriate professional advice. This is perhaps more complicated than ordinary "screen addiction"; the screen now adapts to us—it actively participates in building the relationship that brings us back for more.

While wires support the illusion of the performance, such hidden hooks help keep the audience engaged.

## 5. Where does this leave us?

While our theatrical analogy is not perfect,[^analogyBreak] it gives us a way to think about the situation and suggests useful questions to ask. A better sense of the system's complexity does not produce one simple rule for using AI—complex systems rarely do—but it gives us a better basis for deciding when and how to use these systems.

In practice, that might mean protecting sensitive information, verifying claims when the consequences matter, and noticing when AI is replacing rather than supporting our own judgment or human contact. It may also require a kind of discipline—or wisdom—about when and how we use these systems (a larger question that deserves a post of its own).

We do not need to stop enjoying the show. The child, the experienced spectator, and the theatre professional can all enjoy watching Peter Pan fly.

Similarly, an AI-literate audience can benefit from the system's performance while maintaining critical questions in mind[^benefit]: Why does this feel so persuasive? Does polished writing make it sound more "expert" than it is? What habits and expectations is it creating in me? Do I remember that I am watching a show—and am I choosing when to suspend disbelief? 

Consider this short post a prompt for you, the reader: a framework for noticing what is—and is not—visible when you interact with an LLM. AI literacy can allow you to enjoy the flight while learning to see the wires and recognize the hooks.

_Thanks to Daniel Oore, Jonathan Oore, and Stacy Smith for thoughtful feedback on earlier drafts._

---


[^fly]: Well... in a sense, they <i>do</i> run through wires—just not the kind that lift Peter Pan.

[^2]: Estimating what it costs to develop and operate an AI system is complicated and depends greatly on what is counted—for example, a particular training run, the wider research and development process, computing infrastructure, or the ongoing cost of serving users. This is one reason apparently conflicting cost estimates may not be directly comparable.

[^dataPractices]: Exactly what is collected and how it is used varies by provider, product, account, jurisdiction, and settings.

[^neverland]: In keeping with the title of this piece, I almost called this section “Neverland’s Business Model.”

[^artRole]: Arguably, this is one of the reasons theatre and other arts exist: they have an impact on the viewer. That impact can be more subtle and complicated than one might be aware of—a topic for another post.

[^analogyBreak]: Analogies are never perfect, by design. They make some things "clearer" by being inaccurate about other things. If they were perfect, they would no longer be an analogy; they'd be the actual thing! Like all of them, this one has limitations too. An LLM is neither a conscious actor following a director's instructions nor a scripted theatrical production. Nor is the user merely a spectator: your prompts help shape what happens, making you part audience member, part improvisational partner, and sometimes a kind of director. The resulting “performance” emerges from the interaction between you and a system shaped by training, statistical prediction, software, policies, prompts, and product decisions. Some of these elements deserve—and might just receive—future posts of their own. In the meantime, if any aspect is truly unclear, feel free to leave a question and I'll try to respond.

[^benefit]: In fact, AI literacy allows the user to gain significantly more benefits from these systems.