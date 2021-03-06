const connection = require('./connection');

const COLLECTION = 'users';

exports.create = async ({ name, email, password, admin }) => {
  try {
    const db = await connection();

    const role = !admin ? 'user' : 'admin';

    const user = await db.collection(COLLECTION).insertOne({ name, email, password, role });

    return {
      _id: user.insertedId,
      name,
      email,
      role,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};

exports.getUserByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection(COLLECTION).findOne({ email });

  return user;
};
