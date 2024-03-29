
type Props = {
  src: string;
}

export default function Avatar({ src }: Props) {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="w-8 h-8 rounded-full"
        src={src || "https://api.dicebear.com/8.x/pixel-art/svg"}
        alt="avatar"
      />
      </div>
  );
}
