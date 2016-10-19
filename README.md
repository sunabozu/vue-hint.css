# vue-hint.css

> A lightweight wrapper for [hint.css](https://kushagragour.in/lab/hint/) that brings customizible tooltips to Vue.js

**[DEMO](https://jsbin.com/wofeqap/edit?html,output)**

## Links
- [hint.css](https://kushagragour.in/lab/hint/)
- [Vue.js](https://vuejs.org)

It's just a small directive that adds tooltips to your elements.

You can import it directly in your HTML page (it will be available as a global variable named `VueHintCss`):

``` html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.4.0/hint.min.css" />
<script type="text/javascript" src="http://cdn.rawgit.com/sunabozu/vue-hint.css/master/index.js"></script>
```

Or install through npm...

```
npm i vue-hint.css --save
```

...and then import it:

``` javascript
require('hint.css/hint.css')
const VueHintCss = require('vue-hint.css')
```

## Usage

In your component:

``` javascript
export default {
  directives: {
    VueHintCss
  },

  ...
}
```

In your template:

``` html
<button vue-hint-css.top="'the text of the tooltip'">Submit</button>
```

## Modifiers

vue-hint.css supports all the options hint.css provides. It does it through modifiers. For example, to show a persistent, rounded, red tooltip to the right of your element:

```
v-hint.right.rounded.always.error="'Tooltip'"
```

Supported modifiers:

- top, right, bottom, left
- error, success, info, warning
- always
- rounded
- no-animate
- bounce

If you want to hide a persistent tooltip (`always`), just set it to `false` or `null`.