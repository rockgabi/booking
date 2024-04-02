import { getServerSession } from "next-auth";
import Avatar from "../avatar";

export default async function AvatarIcon() {
  const session = await getServerSession()

  if (!session || !session.user) {
    throw new Error('No user session found. Component relias on the user session.')
  }

  return <Avatar src={session.user.image as string} />
}
