# Picture language

### Relevant section in text: 2.2.4

This is the original material on the square-limit language, which was revised to form section 2.2.4 of the book. For explanations of how the language works, you should use the book rather than the assignment text given here. We have not included a postscript file here, because the explanation (and the figures) in the book are better.

The code below includes an implementation of primitive painters for line-drawings and two-dimensional images. This code is specific to MIT Scheme. It includes a constructor that creates primitive painters from `pgm` files.

### Files for download:

| `[ps4hnd.tex](ps4hnd.tex)` | TeX source for the assignment. |
| `[hend.scm](hend.scm)`
`[hutils.scm](hutils.scm)`
`[psgo.scm](psgo.scm)` | Scheme source code required for this assignment. |
| `[prmpnt.scm](prmpnt.scm)` | Scheme source code implementing constructors for primitive painters (highly MIT Scheme specific). You should compile this file to obtain adequate performance. |
| `[einstein.pgm](einstein.pgm)`
`[fovnder.pgm](fovnder.pgm)` | Sample `pgm` files that can be used to create painters. |

<font size="-1">_Copyright © 1985-1996 Massachusetts Institute of Technology_.
The material in these problem sets may be duplicated, modified, and redistributed for any non-commercial use in conjunction with the book _Structure and Interpretation of Computer Programs_.</font>

* * *

[![](../back.gif) Return to sample assignment page](../../psets)

[![](../back.gif) Return to SICP page](/sicp)

_Last modified September 1, 1996_