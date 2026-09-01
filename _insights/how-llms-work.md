---
title: How Large Language Models Work
date: 2026-09-01
excerpt: A plain-language explanation of how language models learn to predict text—and why that can look like intelligence.
draft: true
sitemap: false
---

## 1. What does a language model appear to do—and what is it actually doing?

A large language model (LLM) appears to read what we write, understand it, and write a response. In reality, it produces the response one small piece of text at a time. These pieces are called tokens. A token may be a whole word, part of a word, or even just a punctuation mark.

After looking at the prompt and the text it has already written, the model works out which token is most likely to come next, chooses one, and then repeats the process.

For example:

> If the prompt says, “The cat sat on the,” the model might predict “mat” as the next token.

This is a simplified description. The model does not have eyes or ears, so it does not “process” the text in the same way a human does.

## 2. How was it taught to do this?

An LLM is built by showing it a huge amount of text [see section on data] and repeatedly asking it to fill in the next piece. The original text shows whether its answer was right or wrong. The system then adjusts the model so that it is more likely to make the right kind of prediction next time. This process is called training.

For example:

> If the model sees “The cat sat on the” and predicts “roof,” but the original text says “mat,” the training process adjusts the model so that “mat” becomes more likely in similar situations.

After being trained on an enormous number of examples, the model becomes good at recognizing patterns in language and using those patterns to produce new text. This is an oversimplified explanation [link here for a few more details]. Remarkably, eventually it gets so good at predicting the possible next piece of text, that it can do this very well even for sentences that it has never seen before! This is called {% include hover-info.html term="generalization" info="The ability to perform well on new examples that were not part of the model's training data." %} by AI researchers.

## 3. How can learning to guess the next piece of text lead to anything that looks like “intelligence”?

Some predictions are easy.

For example, even though the Oxford English Dictionary has nearly 200,000 words, in the sentence

> “Every morning I walk my \_,”

a model could be right most of the time by just guessing the word “dog”. But if you just picked a word randomly from the dictionary, your chances of picking the word “dog” would be around 1 in 200,000.[^random-words]

But that’s an easy sentence. Here is a trickier one, where making the right guess is easy if you understand the text, and very hard if you don’t:

Imagine a character (Jen) in a long story saying to another character (Jim), “The gallery closes at eight”.

If Jen knows the gallery’s schedule, the sentence might end with a period. But if Jim is the one that knows the schedule, and Jen doesn’t, then her sentence would end with a question mark. In order to make the right guess, the model would need to have understood the story up to that point, and even somehow keep track of what each character knows![^punctuation]

This does not show that the model understands or thinks exactly as a person does. It means that a system built to predict text can acquire abilities that have many of the properties of what we consider to be intelligence.

[^random-words]: There are different ways of picking words randomly from the dictionary. For example, you could choose more common words with a higher chance, sort of like having loaded dice that favour some numbers more than other numbers. In this example we are assuming each word is equally likely as the next word.

[^punctuation]: Guessing equally between a question mark and a period means you might be right around 50% of the time, so that kind of guessing would be easy. Or you could say that people use periods 75% of the time and only use question marks 25% of the time. That would be a slightly more sophisticated, but still pretty simple way of guessing. But doing better than those kinds of simple chance—and just getting it right based on the understanding of the story—is much, much harder!
