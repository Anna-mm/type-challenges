import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Any<[1, 'test', true, [1], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<Any<[1, '', false, [], {}]>, true>>,
  Expect<Equal<Any<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<Any<[0, '', true, [], {}]>, true>>,
  Expect<Equal<Any<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<Any<[0, '', false, [], {name: 'test'}]>, true>>,
  Expect<Equal<Any<[0, '', false, [], {1: 'test'}]>, true>>,
  Expect<Equal<Any<[0, '', false, [], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<Any<[0, '', false, [], {}]>, false>>,
  Expect<Equal<Any<[]>, false>>,
]
