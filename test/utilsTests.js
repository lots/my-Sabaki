import assert from 'assert'

import {
  cycleAreaValue,
  markupCleanupProperties,
  scoringMethodForRules,
} from '../src/modules/utils.js'

// cycleAreaValue backs the manual territory overrides in scoring/estimator mode.
// Area values are -1 (white) / 0 (neutral) / 1 (black), and `steps` advances a
// point that many positions through neutral -> black -> white, relative to
// whatever the estimate currently shows there.
describe('cycleAreaValue', () => {
  it('cycles a neutral point through black, white, back to neutral', () => {
    assert.strictEqual(cycleAreaValue(0, 1), 1)
    assert.strictEqual(cycleAreaValue(0, 2), -1)
    assert.strictEqual(cycleAreaValue(0, 3), 0)
  })

  it('advances relative to the current estimate, not from neutral', () => {
    assert.strictEqual(cycleAreaValue(1, 1), -1) // black estimate -> white
    assert.strictEqual(cycleAreaValue(-1, 1), 0) // white estimate -> neutral
  })

  it('wraps every three steps back to the estimate', () => {
    for (let base of [-1, 0, 1]) {
      assert.strictEqual(cycleAreaValue(base, 3), base)
      assert.strictEqual(cycleAreaValue(base, 6), base)
    }
  })
})

// Backs Tools -> Clean markup. The label category must strip old-style L[]
// labels (FF[3]) as well as modern LB[], since Sabaki reads and renders both;
// see #881.
describe('markupCleanupProperties', () => {
  it('cleans both old-style L[] and modern LB[] labels', () => {
    assert.deepStrictEqual(markupCleanupProperties.label, ['LB', 'L'])
  })

  it('maps every category to a non-empty list of property idents', () => {
    for (let [category, props] of Object.entries(markupCleanupProperties)) {
      assert.ok(
        Array.isArray(props) && props.length > 0,
        `${category} should map to a non-empty array`,
      )
      assert.ok(
        props.every((p) => typeof p === 'string' && /^[A-Z]+$/.test(p)),
        `${category} props should be SGF idents`,
      )
    }
  })
})

// scoringMethodForRules maps a record's SGF RU value onto the scoring method
// Sabaki preselects, so a Chinese-rules game is not scored Japanese-style by
// accident. Anything unrecognised returns null, letting the user's last choice
// stand.
describe('scoringMethodForRules', () => {
  it('reads area-scoring rule sets', () => {
    for (let rules of [
      'Chinese',
      'Chinese 2002',
      'AGA',
      'NZ',
      'New Zealand',
      'Ing',
      'GOE',
      'Tromp-Taylor',
      'area',
    ]) {
      assert.strictEqual(scoringMethodForRules(rules), 'area', rules)
    }
  })

  it('reads territory-scoring rule sets', () => {
    for (let rules of ['Japanese', 'Korean', 'Japanese (1989)', 'territory']) {
      assert.strictEqual(scoringMethodForRules(rules), 'territory', rules)
    }
  })

  it('is case and whitespace insensitive', () => {
    assert.strictEqual(scoringMethodForRules('  CHINESE '), 'area')
    assert.strictEqual(scoringMethodForRules(' japanese'), 'territory')
  })

  it('returns null for unknown or missing rules', () => {
    assert.strictEqual(scoringMethodForRules('Some Local Club Rules'), null)
    assert.strictEqual(scoringMethodForRules('French'), null)
    assert.strictEqual(scoringMethodForRules(''), null)
    assert.strictEqual(scoringMethodForRules('   '), null)
    assert.strictEqual(scoringMethodForRules(null), null)
    assert.strictEqual(scoringMethodForRules(undefined), null)
  })
})
