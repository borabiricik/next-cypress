"use client"
import Image from "next/image"
import Link from "next/link"

type Props = {
  src: string
}

const ProfileImage = ({ src }: Props) => {
  return (
    <Link data-cy="profile-link" href={"/dashboard/profile"}>
      <Image
        className="rounded-full object-cover"
        src={src}
        width={100}
        height={100}
        alt="profile"
        loader={({ src }) => src}
        data-cy="profile-image"
      />
    </Link>
  )
}

export default ProfileImage
