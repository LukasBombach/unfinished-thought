---
title: "What are you even testing for?"
description: ""
date: "2020-03-16T05:35:07.322Z"
---

I want to write a followup on [Kent C. Dodds' Post "Write tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) which tackles the question
not how to write tests, but which tests to write.

A few months ago my dear colleague [Patrick](https://twitter.com/patrickdahms) asked me to discuss our testing strategy. We knew we could write tests, we knew we could cover the entire testing pyramid, we knew all about the supposed amount of tests we should put in each layer and and we also knew that if we wrote too many tests, we'd sacrifice all of our agility.

<center>But none of this answered our question on which tests to write, and which parts of our code to leave untested<sup>*</sup><br />
<sub>* or at best unspecifically covered by tests targeted at something else</sub></center>

## The answer

I will stop the yadda yadda right there and give our answer right away.

> You should write tests so you can sleep peacefully knowing you will not have harmed your business

I know, this does not sound very revealing, but let me explain.

## Mistakes

As Kent (I'm just gonna call you by your first name, very untypical for a German) points out, writing too many tests will create a firm grip on your current implementation that might be way to tight and you end up not being able to change things effortlessly.

- The requirements of your application will change
- The architecture of your appication will change
- You will gain knowledge that makes you _want_ to refactor your code
- You will find bugs and have to change things

When you learn about software architecture you will find a reoccurent notion that many books agree upon:

Your implementation will change over time.

- During initial development
- hen extending your product
- even in maintenance mode

So rather than architecting for the perfect system, you need to consider and optimize for changeability and extendability. If you wrote too many too specific tests, you will have to refactor all of those too, just to move forward. This will probably be frustrating and might leave you wishing to not write any more tests at all.

## You cannot test everything anyway

One of the elders of computer science, Edsger W. Dijkstra, already understood that it is impossible to prove correctness of an application—even with code that tests code. Like in science, you can falsify things. You can write code for specific scenarios and check if your code fails (or succeeds) in with under specific conditions.

> But you can never _prove_ that you accounted for all sutiations

Even when brute-forcing environments and appication states, you cannot _guarantee_ your brute-force test code to be correct. There are a lot of approaches to make a reasonable case that your code _should_ really be correct, type systems help, functional programming has its ways of tackling this, but it is still hard to _prove_ to know that you know.

I am going to steal this one from Wikipedia's article on Falsifiability

![](./what_are_you_even_testing_for/black_swans.jpg)

> Even with no black swans to possibly falsify it, the hypothesis "All swans are white" would still be falsifiable—a black swan would still be an observable state of affairs (under the law all swans are white or black).

## On the other hand you have different fingers

Of course none of this makes the case of not writing tests at all. So on the one hand we are supposed to write tests, on the other hand we are not supposed to write too many tests. So how many tests are corrent?

Well, the question must be which tests are correct.

## The purpose of tests, distingishing "why" and "what for"

To answer this question you must ask what you write tests for. I want to draw a line between asking

"Why do you write tests"

and

"What to write tests for"

There is an analogy to psychology. When Sigmund Freud developed his theories of psychology he had a competitor in spirit named Alfred Adler. Freud described emotions as a product of your past experiences that leave you reacting in certain ways like a machine that has been set on course and is now playing out its program.

Adler on the other hand saw emotions as a tool the subconcious part of yourself would use to deal with the world. So when a customer in a restaurant would get upset at the waiter for spilling a drink onto them, it was not because some earler experience would make them prone to anger, but because they had learned that anger can drive others into submission so they can get an excuse, help, or some reparation. Of couse the customer coould also just have asked kindly for all of this, but would have been harder and made them more vulnurable.

Phew, back to computer science, where things are easy.

So the analogy is this. Instead of asking why do we want to write tests, and understand something deep, we should look to the here and now (and the future) in practical terms. What do we want to write tests for?

so the first part of the sentence, you should sleep well. There has often been uttered a phrase along the lines of "tests shoulf give you confidence that your project is free of bugs". You can't have that. It's not withing your cards. You cannot prove correctness. But you can aim for a good sleep. You cannot know you did everything right, but you can design your tests so that you can sleep peacefully, and that problems critical for your business, which will come back at you and your responsibility have been adressed well enough.
