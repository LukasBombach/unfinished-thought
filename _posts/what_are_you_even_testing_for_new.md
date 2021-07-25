---
title: "What are you even testing for?"
description: ""
date: "2021-07-26T00:00:00.322Z"
---

As a followup on [Kent C. Dodds' post "Write tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) I want to reiterate the question which tests to write and which tests not to write. All of what this post says is correct, but when writing tests for a react component, a library or your application's architecture, arguments about the testing pyramid or code coverage will not tell you what part of your current feature you actually need to test and which parts you can ignore. You will also not get a feeling of confidence that your application will have no bugs.

## A Practical example

Say you have this footer component in a react application

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

How would you test this? One classic argument would be that you don't really test UI so much. According to the testing pyramid your should barely write any tests here as UI is typically prone to change a lot. You could also argue that there is not much going on here and write a snapshot test for the entire component and be done.

The first version would satisfy claims about the testing pyramid the latter version would bump test coverage to 100%. None of these paradigms can give you any specific confidence (or guidance) what to actually do here. Would you test if the component wraps its content in a `<footer />` tag? Should you test that you integrated the sitemap? What about the other links? The testing pyramid and coverage provide no way of reasoning about this.

I want to shine a different light on this: Business Value.

## Business value

This argument is the result of the conversations I had with my dear colleague [Patrick](https://twitter.com/patrickdahms) who once asked me to discuss our "testing strategy". Patrick has a great way of asking what we want to achieve and if the things we are doing are actually supporting our goal.

So in terms of testing, what do we want.
