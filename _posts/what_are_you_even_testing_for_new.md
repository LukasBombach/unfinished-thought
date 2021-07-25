---
title: "What are you even testing for?"
description: ""
date: "2021-07-26T00:00:00.322Z"
---

As a followup on [Kent C. Dodds' post "Write tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) I want to reiterate the question which tests to write and which tests not to write. All of what this post says is correct, but when writing tests for a react component, a library or your application's architecture, arguments about the testing pyramid or code coverage will not tell you what part of your current feature you actually need to test and which parts you can ignore. You will also not get a feeling of confidence that your application will have no bugs.

## A Practical example

Say you have this footer component in a react application

```jsx
// MyPageFooter.js

function MyPageFooter({ title, text }) {
  return (
    <footer>
      <a href="/imprint">Imprint</a>
      <a href="http://twitter.com/OurCompany">OurCompany on Twitter</a>
      <a href="http://facebook.com/OurCompany">Like us in Facebook</a>
      <a href="/jobs">We're hiring!</a>
      <CompanyNetwork />
    </footer>
  );
}
```

How would you test this? One classic argument would be that you don't really test UI so much. According to the testing pyramid your should barely write any tests here as UI is typically prone to change a lot. You could also argue that there is not much going on here and write a snapshot test for the entire component and be done.

The first version would satisfy claims about the testing pyramid the latter version would bump test coverage to 100%. None of these paradigms can give you any specific confidence (or guidance) what to actually do here. Would you test if the component wraps its content in a `<footer />` tag? Should you test that you integrated the `<CompanyNetwork>`? What about the other links? The testing pyramid and coverage provide no way of reasoning about this.

I want to shine a different light on this: Business Value.

## Business value

This argument is the result of the many conversations I had with my dear colleague [Patrick](https://twitter.com/patrickdahms) who once asked me to discuss our "testing strategy". Patrick has a great way of asking what we want to achieve and if the things we are doing are actually supporting our goal.

So what do we want from testing?

Knowing that our code is correct? No, as Edsger W. Dijkstra suggested, this is impossible. You cannot prove correctness of code. Strongly typed languages and paradigms of functional programming can harden your application, but however far you get with languages, paradigms, tools and tests, but the final wall you cannot suprass is that you cannot know how much you know. You can brute-force data and environments to run every feature of your application through every possible state, but you will then have to prove, that the code you wrote to test your code is also 100% correct. You see where this is going. This is simplfied and there is a lot more to say about this, but let us move on with the article.

Kent's article also mentioned that your goal should not be to test as much as you can, believing you thereby achieve the most safety against bugs you can get. If you tested any aspect of the component in our practical example and did that for every line of code in your project, you will probably spend way more time re-adjusting your tests than implementing a feature. You will run into a high risk of frustration which rarely leads to a successful project. The disciplines of software architecture usually put a great emphasis on projects ability to change (because software does that when being worked on) and this would be the end of this.

So you need to be selective in what you want to test and this is where business value comes in. You want to make sure your software works, but you also want to avoid blindlessly increasing test coverage, crossing your fingers and hoping you prevented a bug somewhere. You need to focus on what's important.

In most cases, this means business value. Sorry, that is really uninspirational, but it is true for most paid work, even NGOs and your own startup. The thing that might make you feel better, is that you can be a good programmer—and a professional and that can be your own motivation. At least, it is for me.

So to show what this means, let's go back to our practical example.

## Business value + The Practical example = What to test

Let's have a look again and try to figure out what's important here

```jsx
// MyPageFooter.js

function MyPageFooter({ title, text }) {
  return (
    <footer>
      <a href="/imprint">Imprint</a>
      <a href="http://twitter.com/OurCompany">OurCompany on Twitter</a>
      <a href="http://facebook.com/OurCompany">Like us in Facebook</a>
      <a href="/jobs">We're hiring!</a>
      <CompanyNetwork />
    </footer>
  );
}
```

Let's start with line `6`, the link to the imprint. In Germany, every website is legally obliged to display a link to your company's imprint on every page. So you might have stake holders in your company that need this be be there. Let's write a test for this in Jest:

```jsx
// MyPageFooter.spec.js

describe("MyPageFooter", () => {
  test("it should display a link to the imprint page", () => {
    const { queryByText } = render(<MyPageFooter />);
    const imprintLink = queryByText("Imprint");
    expect(imprintLink).toBeInTheDocument();
    expect(imprintLink).toHaveAttribute("href", "/imprint");
  });
});
```

This will make sure the links is _there_ and points to the expeceted url. When you, 6 months later, or one of your colleagues change the code of this component, it is ensured this one stays here.

Lines `7-8`: For the purpose of demonstration, let's assume, your product people think those should be there, but your PO agrees, this is really not critical for our business. So we write no tests for this.

Line `9`, hiring. Your company is in desperate need of software developers and marketing gurus. Your PO knows, this one has to be there. We're gonna write a test.

```jsx
// MyPageFooter.spec.js

describe("MyPageFooter", () => {
  test("it should display a link to the jobs page", () => {
    const { queryByText } = render(<MyPageFooter />);
    const imprintLink = queryByText("We're hiring!");
    expect(imprintLink).toBeInTheDocument();
    expect(imprintLink).toHaveAttribute("href", "/jobs");
  });
});
```

Line `10`, the CompanyNetwork: Your business owns more than one page. The colleagues from SEO make it clear we need to link to their website. So we write a test to make sure when our code changes, we get notified if we forget about this.

```jsx
// MyPageFooter.spec.js

describe("MyPageFooter", () => {
  test.each`
    text     | url
    ${"foo"} | ${"https://foo.com/"}
    ${"bar"} | ${"https://bar.com/"}
  `("it should display a link to $text", ({ text, url }) => {
    const { queryByText } = render(<MyPageFooter />);
    const imprintLink = queryByText(text);
    expect(imprintLink).toBeInTheDocument();
    expect(imprintLink).toHaveAttribute("href", url);
  });
});
```

## What this means

As you can see from these three examples, it does not quite matter if the test are integration tests (testing for a link in our component or one included through `<CompanyNetwork />`) or they test code from the component at hand, the point is to test things that we are critical for our business. Code coverage is also not important here.

The importance of this is, that you can now reason about what parts of your code you need to test. Avoiding too many tests, creating an appropriate testing pyramid and keeping your agility when moving your project forward are all side effects of this. You will also conform to principles of software architecture like the [Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) which allow you to move your project forward without exerting more effort than needed.
