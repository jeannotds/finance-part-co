import * as bcrypt from 'bcrypt';

export function encodePassword(rowPassword: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rowPassword, salt);
}

export default function comparePasswords(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}
