const instrument1 = {
  type: 'violin',
  size: '3/4',
  shipped: new Date(),
  maker: {
    type: 'luthier',
    name: 'Mark Gibbons',
    address: {
      street: 'Main Street',
      city: 'Main City',
    },
  },
};

// Aufgabe:  instrument1 copy into instrument2

// shallow clone
/* const instrument2 = { ...instrument1 }; */
// deep clone => Nachteil ist, alles ist dazwischen umgewandert (Date Object ist kein Objekt mehr)
/* const instrument2 = JSON.parse(JSON.stringify(instrument1)); */
// deep clone
const instrument2 = structuredClone(instrument1);

instrument2.size = '4/4';

const address1 = instrument1.maker.address;
const address2 = instrument2.maker.address;

address2.street = 'New Street';

/* console.log({ instrument1 });
console.log({ instrument2 }); */

/* function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); */

const rawUser1 = {
  firstName: 'emil',
  mail: 'email@mail.com',
};

const changeMail = (_user, newEmailAddress) => {
  _user.mail = newEmailAddress;
};

/* changeMail(rawUser1, 'newEmail@mail.com'); */

//emil => Emil
/* const sanitazeUser = (_user) => {
  _user.firstName.slice(0, 1).toUpperCase() +
    _user.firstName.slice(1).toLowerCase();
  return _user;
};

const user1 = sanitazeUser({ ...rawUser1 });

console.log(rawUser1);
console.log(user1); */

const instrument3 = {
  id: '12341234',
  author: 'Nice author',
  type: 'violin',
  size: '3/4',
  shipped: new Date(),
  maker: {
    profession: 'luthier',
    name: 'Mark Gibbons',
    address: {
      street: 'Main Street',
      city: 'Main City',
    },
  },
};

const post1 = {
  postId: '',
  body: 'asldkjdlfjashdlfjasdhf',
};

const printPost = ({ author = 'Ich', date = new Date(), body }) => {
  
  if (!author) {
 
  }

  const post = `${author} wrote ${body} ${date}`;
  console.log(post);
};

printPost(post1);

// This violin is made by Mark Gibbons at the Main Street

/* const type = instrument3.type
const street = instrument3.maker.address.street
const size = instrument3.size */

const _name = instrument3.maker;
const { maker } = instrument3;

const printSentence = (instrument) => {
  const { type, maker, author = 'anonym' } = instrument;

  const localId = 'asdasdasd';
  const sentence = `Author : ${author} This ${type} is made by ${maker.name} at the ${maker.address.street}`;
  return sentence;
};

/* console.log(printSentence(instrument3)); */
