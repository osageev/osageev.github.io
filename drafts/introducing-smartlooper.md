---
layout: post
title: "Feeling Groovy: A Musician-designed Smart Looper"
date: 2025-06-14
excerpt: "Introducing SmartLooper — a musician-first AI tool that’s creative, expressive, and fun to play with."
---

![A Piano](/assets/images/dk.jpeg)

# Introducing A Musician-Designed Smart Looper

While SmartLooper was created and implemented by ML researchers [^1], I started the design by asking myself, as a musician:

> *“Forget about AI: what tool would you love to have?”*

The answer was simple and immediate: I wanted to create a groove at my piano, and play along with it. That's it. But I didn’t want just another looping pedal. I wanted the groove played as if I were holding it down myself — keeping the feel, and also letting it gradually evolve and unfold.

So that’s what we made. And honestly? It’s one of *the. most. fun.* AI-music tools I’ve ever used. (And it's still in development — so it's getting more fun all the time!) Part of what makes it so engaging is that the AI is secondary: it is just a *means to a creative end*.

About the SmartLooping idea: it’s one of those concepts which might seem obvious in hindsight, and it's easy to run with once it's been defined. (But if it were really that obvious, we would have had systems doing this years ago.) It fills a gap, it sounds great, and the tech is ripe for it. We’re really excited about all of this.

This post introduces SmartLooper from a musician's point of view. We’ll share more demos and technical details in future posts. But first, here’s how it all started.

## Step 1: Collect Some Personal Data

Over a period of many months, I collected my own playing data. Just a little at a time — 20 minutes here, 30 minutes there — and over time it added up.

On what did I collect it? A Yamaha Disklavier—a real (& good) piano with MIDI in/out. Think: Yamaha grand meets USB port.

I usually plug it into Ableton Live, but other DAWs work fine too. I mainly collect MIDI, but there's always an audio input recording as well.

> _[Insert photo of the Disklavier with a caption: "Click to see other cool Disklavier projects..."by folks like Dan Tepfer, Pablo Castro, Nikhil, and more. [message those guys to ask them] Got something to share? Message me!"]
_

If you want to try this at home, get in touch[^2]. You don't need a Disklavier — any MIDI-capable keyboard will work.

As for how I collected the data: that’s for a future post. But in short, I gave myself a few simple practice constraints that made the recordings musically rich and helpful for building this system. While the guidelines were simple, I could still play complex stuff when I wanted. So basically I'd sit down, hit record, and have a great time playing and practising within a structure.

That data became the crucial foundation of something surprising: a system that sort of reflected my own playing back to me and could help keep the groove while I'd play over it.

## Step 2: Iterating Towards Playability

Here’s where things got interestingly messy.

With initial data in place, we began building, testing, and tweaking the system. It wasn’t just about getting it to work—it was about making it playable.

We bounced between steps such as:

- Absorbing data: cleaning it, throwing some of it, and collecting more
- Parsing the spoken audio using Whisper (remember, everything was being recorded) to pull out spontaneous practice notes and musical instructions I said aloud
- Debugging: At first the system was nearly unplayable. It seemed there was always something... but then...
- Spotting glimmers of something cool... and then chasing them! (whooohoo)

We’d iterate on the system’s internals, fix one thing, break another, fix that, try again. Slowly, the experience evolved from frequent "this is frustrating" to often: "this is awesome to play with."

> _Side note: I’ve got opinions about the limitations of many so-called AI music tools—but I’ll save that rant for another post.

SmartLooper is satisfying, engaging, and exciting to play: I now look forward to coming back to it every time and trying out new musical things! And it feels musically rewarding. That's no small thing.

## Step 3: Playing a Duet (with Sort of Myself)

So what actually happens? What does this SmartLooper do?

I start by playing a groove — usually just a few bars. I use a foot pedal to mark the rough start and stop points. You can think of what I play as a musical prompt.

<!-- delete the '-foot' to delete my foot!-->
![Picture of piano pedals](/assets/images/pedal-foot.jpeg)

*markdown doesn't properly support picture captions but you can italicize a line underneath if you want*

SmartLooper then takes that prompt and looks for a good excerpt within it — maybe the whole thing, maybe just 8 beats, maybe half of it. The system is more effective and enjoyable to improvise with when it lets me be loose and exploratory at the start.

From there, it loops that excerpt as a groove — but not rigidly. It slowly and subtly shifts things around. The feel stays intact, but the loop evolves.  [could insert 10-30 second videos, e.g. from T1 to demonstrate this]

We also added “direct controls” that are completely predictable. For example, I can use a small auxiliary keyboard to force modulation to a new key.

> _[Insert modulation demo video]_

I can also dial up (or down) the system's sensitivity to my own dynamics.

> _[Insert control demo image or video]_

### Here’s what it feels like to play with it:

- **Keeps things consistent enough** that I know what to expect.
- **Surprises are usually delightful**. As we iterated, it went from usually annoying, to sometimes fun, to often fun.
- The balance between predictability and surprise feels like it's **in a sweet spot** these days
- **Direct controls are satisfying** to incorporate when I want to, and unobtrusive otherwise
- **It extends what I can do** — I can explore playing over my own grooves. 
- **Signals big shifts clearly** via a visual interface [include image]. I can see and hear them coming a bar or two in advance and adjust my playing accordingly.

People have been asking me, “How does this compare with playing with another person?” And the truth is: it’s not meant to replace that. It has infinite patience, but limited adaptability. You can’t hand it a lead sheet, and it won't notice if mid-jam I started to play a tune we both know.

But compared to practicing alone? It does an amazing thing: it fills a specific gap I sometimes felt when practising solo: wanting a responsive, dynamic groove companion that reflects and expands on my own vocabulary — and every now and then surprises me. And that’s exactly what it’s become.

## What’s Next

Here are some videos!

We’ll be posting more soon: videos, tech breakdowns, and reflections on building musician-driven AI systems.

If you’re a musician or researcher who’s curious to try it out or collaborate—get in touch! We’d love to hear from you.

More to come!

---

[^1]: The current version of the system was created by Finlay Miller, Chandramouli Shama Sastry, Sri Harsha Dumpala, Scott Lowe, Dani Oore, and myself. I wrote this post with their feedback, so even though it's a first person account, the post can be cited as 
Sageev Oore, Finlay Miller, Chandramouli Shama Sastry, Sri Harsha Dumpala, Dani Oore, Scott Lowe, "Introducing A Musician-Designed Smart Looper", Blog Post, 2025-06-15
[^2]: Clickable email link or contact page.
