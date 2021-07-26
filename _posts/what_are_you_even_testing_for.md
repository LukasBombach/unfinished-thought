---
title: "What are you even testing for?"
description: ""
date: "2021-07-26T00:00:00.322Z"
---

As a followup on [Kent C. Dodds' post "Write tests. Not too many. Mostly integration."](https://kentcdodds.com/blog/write-tests) I want to reiterate the question which tests to write and which tests not to write.

All of what this post says is correct, but when writing tests for a react component, a library or application, arguments about the testing pyramid or code coverage cannot give you guidance on which parts of the code infront of you would actually test and which parts you would leave untested.

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
      <LinksToRelatedCompanies />
    </footer>
  );
}
```

How would you test this? One classic argument would be that you don't really test UI so much. According to the testing pyramid you should barely write any tests here as UI is typically prone to change a lot. You could also argue that there is not much going on here, write a snapshot test for the entire component and be consider your tests complete.

The first version would satisfy claims about the testing pyramid the latter version would bump test coverage to 100%. None of these paradigms can give you any specific confidence (or guidance) what your should actually do here.

Would you test if the component wraps its content in a `<footer />` tag? Should you test that you integrated the `<LinksToRelatedCompanies>`? What about the other links? The testing pyramid and coverage provide no way of reasoning about this.

I want to shine a different light on this: Business Value.

## Business value

This argument is the result of the many conversations I had with my dear colleague [Patrick](https://twitter.com/patrickdahms) who once asked me to discuss our "testing strategy". Patrick has a great way of asking what we want to achieve and if the things we are doing are actually support our goal.

So what do we want from testing?

Knowing that our code is correct? No. As Edsger W. Dijkstra suggested, this is impossible—you cannot prove correctness of code. Strongly typed languages and paradigms of functional programming can harden your application, but however far you get with languages, paradigms and tooling, you will hit one of many walls you cannot surpass. This is a much bigger topic than this post can do justice, but one simple example is a function that takes an arbitrary string as an input and returns a specific output for this. You can try and test as many inputs as you possibly can think of, you still won't be able to prove the next input will fail your test. In science, this is discussed under the name of [falsifiability](https://en.wikipedia.org/wiki/Falsifiability). Even when you in a clever way implement code that mathematically proves your code to be correct, something akin to [induction](https://en.wikipedia.org/wiki/Mathematical_induction), you will still have to show your tests has been implemented correctly.

If you believe "well, let's test as much as we can then", as Kent's article describes, you will do more harm than good. A big concern of software architecture is that when you need to change your code, the amount of effort you have to do for this stays minimal. This is _VERY_ important. Your project _WILL_ change over time and implementation details will change with it. If you write too many tests, you <del>might</del> will most definitely end up in situation where you change 2 lines in your code, but have to adjust 40 lines of tests. This is highly frustrating will kill everyone's spririts when working on and moving forward with your project.

So you need to be selective in what you want to test and this is where business value comes in. You want to make sure your software works, but you also want to avoid blindlessly increasing test coverage, crossing your fingers and cluelessly hoping you prevented a bug somewhere or sometime. You need to focus on what's important.

In most cases, this means business value and by this, I mean money. Sorry, that is brutally uninspirational, but it is true for most paid work, even for NGOs or your own startup. I know this does not sound very idealistic,

T he thing that might make you feel better, is that you can be a good programmer—and a professional and that can be your own motivation. At least, it is for me.

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
      <LinksToRelatedCompanies />
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

Line `10`, the LinksToRelatedCompanies: Your business owns more than one page. The colleagues from SEO make it clear we need to link to their website. So we write a test to make sure when our code changes, we get notified if we forget about this.

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

As you can see from these three examples, it does not quite matter if the test are integration tests (testing for a link in our component or one included through `<LinksToRelatedCompanies />`) or they test code from the component at hand, the point is to test things that we are critical for our business. Code coverage is also not important here.

The importance of this is, that you can now reason about what parts of your code you need to test. Avoiding too many tests, creating an appropriate testing pyramid and keeping your agility when moving your project forward are all side effects of this. You will also conform to principles of software architecture like the [Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) which allow you to move your project forward without exerting more effort than needed.

## Finalizing the pattern

Patrick and I started a pattern on how to write tests, by using multiple describe blocks, grouping the reasons we write tests for

```jsx
// MyPageFooter.spec.js

describe("Legal requirements", () => {
  test("it should display a link to the imprint page", () => {
    const { queryByText } = render(<MyPageFooter />);
    const imprintLink = queryByText("Imprint");
    expect(imprintLink).toBeInTheDocument();
    expect(imprintLink).toHaveAttribute("href", "/imprint");
  });
});

describe("Business Requriements", () => {
  test("it should display a link to the jobs page", () => {
    const { queryByText } = render(<MyPageFooter />);
    const imprintLink = queryByText("We're hiring!");
    expect(imprintLink).toBeInTheDocument();
    expect(imprintLink).toHaveAttribute("href", "/jobs");
  });
});

describe("SEO Requirements", () => {
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

Of course each block would hold more than one test and the tests themselves can probably be optimized in many ways (I do know of `getByText` :) ), but this should demonstrate the idea behind this approach.

I need to mention [Patrick](https://twitter.com/patrickdahms) here once more and express my huge thanks and appreciation. He started the conversation and drove it into the direction we ended in.

If you would like to talk to me about this article you can post on the [GitHub Discussions](https://github.com/LukasBombach/unfinished-thought/discussions) of this blog or @ me on Twitter as [@luke_schmuke](https://twitter.com/luke_schmuke).
