<p align="center">
  <img align="center" width="20%" src="https://raw.githubusercontent.com/shravan20/utilite/main/assets/logo.png" alt="logo"/>
  <h5 align="center">utilite: a powerful utility library for clean code in js & ts ecosystem</h5>
</p>

---

<p align="center">
<b>Join us at our server for any discussion, guidance and help:</b>
<a href="https://discord.gg/2nN2VqwNaK">
  <img align="center" width="10%" src="https://dcbadge.vercel.app/api/server/2nN2VqwNaK" alt="logo"/>
  </a>
</p>

### Setup

- How to setup the code?

1. Clone the [repository](https://github.com/shravan20/utilite)

2. Provide NPM and Node.js is installed locally,

```
  npm install
```

3. Now to validate if everything is working fine, please run the following command:

```
  npm run check-setup
```

Voila! The successful execution ensures setup has been done properly.

---

To use as the `utilite` [npm package](https://www.npmjs.com/package/utilite):

```
  npm i utilite
```

### Usage

```typescript
import { isAnyMatching, formatDate, compareJSONObject } from 'utilite';

// Array utilities
const hasEvenNumber = isAnyMatching([1, 3, 4, 5], (value) => value % 2 === 0);

// Date utilities  
const formattedDate = formatDate(new Date(), 'MM/DD/YYYY');

// JSON utilities
const diff = compareJSONObject(obj1, obj2);
```

### Features Supported

- Date Utils
- Array Utils
- JSON Utils
- Math Utils

### Features to be Supported

- Function Utils
- CSV Utils
