---
title: "What are you even testing for?"
description: ""
date: "2021-07-26T00:00:00.322Z"
---

As a followup on [Kent C. Dodds' post "Write tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) I want to reiterate the question which tests to write and which tests not to write.

Many months ago my dear colleague [Patrick](https://twitter.com/patrickdahms) asked me to discuss our testing strategy. We knew we could write tests, we knew we could cover the entire testing pyramid, we knew all about the supposed amount of tests we're ought to put in each layer and and we also knew that if we wrote too many tests, we'd sacrifice the our ability to change our software easily.

But no understanding of the the types of tests you can write nor how many of them there should be could answer our specifc question what part of a react component, a library or our architecture we should actually test and which parts we could leave untested<sup>\*</sup><br />
<sub>\* or at best covered by tests targeted at something else</sub></center>

## The answer

I will get straight to the final sound bite and then elaborate. From the discussions we had, this would be my memorable quote

> You should write tests so you can sleep peacefully knowing you will not have harmed your business

I know, this does not sound very revealing, and absurdly unspecific again, but let me explain.

## Practical example

Say you have this kind of page in a react application

```jsx
function MyPageFooter({ title, text }) {
  return (
    <footer>
      <a href="/imprint">Imprint</a>
      <a href="http://twitter.com/OurCompany">OurCompany on Twitter</a>
      <a href="http://facebook.com/OurCompany">Like us in Facebook</a>
      <a href="/jobs">We're hiring!</a>
      <Sitemap />
    </footer>
  );
}
```

How would you test this? One classic argument would be that you don't really test UI so much. According to the testing pyramid your should barely write any tests here. Another lazy attempt would be to write a snapshot test for the entire component and be done with it.

The first version would satisfy claims about the testing pyramid the latter version would bump test coverage to 100%. None of these paradigms can give you any guidance on what to test about this though. Both testing strategies would not make any statement on the validity or provide any reasoning why you would test it this way.

I want to shine a different light on this: Business Value.

## Business value
