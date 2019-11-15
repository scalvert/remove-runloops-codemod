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
