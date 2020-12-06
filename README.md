# SmartHoldem GameChain JS Library

JavaScript library for sending GameChain transactions from the client or server

## Installation

```shell
npm install --save gamechain-js
```

## Tests lib

```
npm test
```

## Build documentation

```
npm build:docs
```

## Build lib for browser

```
npm build:browserify
```

## Clean browser

```
npm clean:browserify
```

## Examples

On the client:

```
<script src="node_modules/gamechain-js/bundle.min.js"></script>
```

On the server:

```js
var sth = require("gamechain-js");
```


### Generate a public/private key pair from a given BIP39 or Any Pass Phrase:

```js
const gamechain = require ('gamechain-js')
const bip39 = require('bip39')

const MNEMONIC = bip39.generateMnemonic(); // muscle scissors verb useless matrix fall dignity luxury head hurdle unaware mistake
const PUB_KEY = gamechain.crypto.getKeys(MNEMONIC).publicKey // 029f6aa2c38b8bfc8882ea71008a7a9c204d228fceac2de1299d9f192b33c95cbc
const ADDRESS = gamechain.crypto.getAddress(PUB_KEY) // SVjFUHYhN6MKjSdcCmqrKza81WNGrArncr

console.log(MNEMONIC) // muscle scissors verb useless matrix fall dignity luxury head hurdle unaware mistake
console.log(ADDRESS) // SVjFUHYhN6MKjSdcCmqrKza81WNGrArncr

---

Get Private key:

```js
console.log('privKey:'+keys.d.toBuffer().toString("hex"));
```


# IMPORTANT NOTE

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.


