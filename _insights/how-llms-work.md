---
title: How Large Language Models Work
date: 2026-09-01
excerpt: A plain-language explanation of how language models generate text, and why that can look like intelligence.
draft: true
sitemap: false
---

## 1. What does a language model appear to do? And what is it actually doing?

A large language model (LLM) appears to read what we write, understand it, and write a response[^appears]. In reality, it produces that response little by little: one small piece of text at a time. These pieces are called tokens. A token may be a whole word, part of a word, or even just a punctuation mark.

After looking at the prompt and the text it has already written, the model works out which tokens are most likely to come next, chooses one, and then repeats the process.

For example:

> If the prompt says, “The cat sat on the,” the model might predict “mat” as the next token.

(This is a simplified description[^hiddenInference].)


## 2. How was it built to do this? (It  was built to _learn_!)

First, we collect an enormous amount of [text](#section-on-data "See the forthcoming section on training data"). For a modern large language model, this can mean trillions of tokens.

Now the system repeats the following steps:

<u>Step 1</u>: Choose any short excerpt from the dataset, e.g.

> **Example excerpt:** `The cat sat on the mat.`

<u>Step 2</u>: Hide the final token and show the model only the beginning:

> **What the model sees:** `The cat sat on the`<br>
> **What is hidden:** `mat`

<u>Step 3</u>: The model tries to predict the hidden token.[^masking]

<u>Step 4</u>: If it predicts the wrong token (e.g. if it predicts `roof`), the system makes a tiny adjustment to the model so that next time, it's a bit more likely to predict the correct answer (i.e. `mat` , in this case)

We then repeat these steps {% include hover-info.html term="many times" info="Typically many hundreds of thousands, or millions, of times, depending on how and what you're counting." %}. Gradually, the model becomes better at predicting what comes next. This process is called _training_.

<!--After being trained on an enormous number of examples, the model becomes good at recognizing patterns in language and using those patterns to produce new text. This is an oversimplified explanation [link here for a few more details]. -->

Remarkably, eventually it gets so good at predicting the possible next piece of text, that it can do this very well even for sentences that it has never seen before! This is called {% include hover-info.html term="generalization" info="The ability to perform well on new examples that were not part of the model's training data." %} by AI researchers.

## 3. How can learning to guess the next piece of text lead to anything that looks like “intelligence”?

First, notice that if you are asked a question, then "predicting the next text", even if it's just one word at a time, can lead you to give the answer. Similarly, if someone says something to you, then "predicting the next text", even if it's just one word at a time, can lead you to engage in a dialogue with them. So predicting the next word is in principle a powerful and very general way to allow a model to "interact" with a human user; it can not only allow the system to write, but to answer questions and engage dialogue, for example.

But why is *learning to predict the next word* such a powerful training mechanism? How does it lead to something that often appears as intelligence and understanding?

Let's start with an easy prediction example.

Even though the Oxford English Dictionary has nearly 200,000 words, in the sentence

> “Every morning I walk my \_,”

a model could be right most of the time by just guessing the word “dog”. But if you just picked a word randomly from the dictionary, your chances of picking the word “dog” would be around 1 in 200,000.[^random-words]

But that’s an easy sentence. Here is a trickier one, where making the right guess is easy if you understand the text, and very hard if you don’t:

Imagine you are reading a long story. At some point in this story, Gertrude says to Pablo, “The gallery closes at eight”. You have to predict the next punctuation mark: does this sentence end with a question mark or a period?

If Gertrude knows the gallery’s schedule, the sentence might end with a period. But if Pablo is the one that knows the schedule, and Gertrude doesn’t, then her sentence would end with a question mark. In order to make the right guess, the model would need to have understood the story up to that point, and even somehow keep track of what each character knows![^punctuation]

This does not show that the model understands or thinks exactly as a person does. It means that a system built to predict text can acquire abilities that have many of the properties of what we consider to be intelligence.

[^random-words]: There are different ways of picking words randomly from the dictionary. For example, you could choose more common words with a higher chance, sort of like having loaded dice that favour some numbers more than other numbers. In this example we are assuming each word is equally likely as the next word.

[^punctuation]: Guessing equally between a question mark and a period means you might be right around 50% of the time, so that kind of guessing would be easy. Or you could say that people use periods 75% of the time and only use question marks 25% of the time. That would be a slightly more sophisticated, but still pretty simple way of guessing. But doing better than those kinds of simple chance—and just getting it right based on the understanding of the story—is much, much harder!

[^appears]: What do you mean, "appears"? Is it not actually doing these things? Well, it depends, in part because different people have different definitions of exactly what it means. For example, I haven't heard many good definitions of what it means to "understand" something. Similarly, when you watch a magician, sometimes they're doing exactly what they appear to be doing. And sometimes they're not... unless you're a magician and you, too, know how the trick works. When we see a movie, we only see what the camera shows us; some of it is real and some of it is an illusion. And the objects in the movie are not actually moving on the screen of course; they just keep getting projected at new positions really quickly, and our eyes process that as motion. I'll write more about that [here].

[^masking]: We don't have to choose exact sentences; we can begin and end anywhere, and repeat this at different points in many excerpts. For example, we can show `The cat` and predict `sat`; show `The cat sat` and predict `on`; and so forth.

[^hiddenInference]: The model does not have eyes or ears, so it does not “process” the text in the same way a human does, and current models have more steps than what I've described here, e.g. they "think-out-loud-to-themselves", also called _reasoning_.
