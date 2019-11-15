# remove-run-in-tests


## Usage

```
npx remove-runloops-codemod remove-run-in-tests path/of/files/ or/some**/*glob.js

# or

yarn global add remove-runloops-codemod
remove-runloops-codemod remove-run-in-tests path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [test-with-runloop](#test-with-runloop)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="test-with-runloop">**test-with-runloop**</a>

**Input** (<small>[test-with-runloop.input.js](transforms/remove-run-in-tests/__testfixtures__/test-with-runloop.input.js)</small>):
```js
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Fuggly test', function(hooks) {
  test('Test with a run in it, kthx', function(assert) {
    run(() => {
      holla()!
    });
  });

  test('Test with a run in it, kthx', function(assert) {
    runnyNose(() => {
      holla()!
    });
  });
});

```

**Output** (<small>[test-with-runloop.output.js](transforms/remove-run-in-tests/__testfixtures__/test-with-runloop.output.js)</small>):
```js
import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('Fuggly test', function(hooks) {
  test('Test with a run in it, kthx', function(assert) {
    holla()!
  });

  test('Test with a run in it, kthx', function(assert) {
    runnyNose(() => {
      holla()!
    });
  });
});

```
<!--FIXTURES_CONTENT_END-->