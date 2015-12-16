# handlebars-subexpression-helpers

Some simple yet useful subexpression helpers for handlebars

From the Handlebars docs:

<blockquote>Handlebars offers support for subexpressions, which allows you to invoke multiple helpers within a single mustache, and pass in the results of inner helper invocations as arguments to outer helpers. Subexpressions are delimited by parentheses.</blockquote>

```
{{outer-helper (inner-helper 'abc') 'def'}}
```

<blockquote>In this case, inner-helper will get invoked with the string argument 'abc', and whatever the inner-helper function returns will get passed in as the first argument to outer-helper (and 'def' will get passed in as the second argument to outer-helper.</blockquote>

To make your life easier I created a set of simple and useful helpers for Handlebars which can exclusively be used as subexpression-helpers.

## Usage

### Node.js

`npm install handlebars-subexpression-helpers`

Then you just need to `require` the module and pass your Handlebars instance to the `.register()` method:

```
var Handlebars = require('handlebars');
require('handlebars-subexpression-helpers').register(Handlebars);
```

Done. Now you can use all of the included helpers.

`<p>Manuel – Status: {{#if (isEqual user.status 'unconfirmed') }} Not yet activated {{else}} Active {{/if}}</p>`

If you don't need all helpers you can also require single helpers. All of them export a `register()` method which expect your Handlebars instance to be passed:

```
var Handlebars = require('handlebars');
require("handlebars-subexpression-helpers/dist/lib/helpers/is-array").register(Handlebars);
require("handlebars-subexpression-helpers/dist/lib/helpers/typeof").register(Handlebars);

```

## List of helpers

For a complete list, have a look at <a href="dist/lib/helpers">dist/lib/helpers</a>. 

While the filename is separated by dashes, the helper name itself is camelCase. So `is-array.js` can be used as `isArray` for example.