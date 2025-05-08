import Link from "next/link";
import { FC, ReactNode } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  children: ReactNode;
  title?: string;
  isActiveLink?: boolean;
  link?: string;
  linkTitle?: string;
}

const ContentWrapper: FC<Props> = ({
  children,
  title,
  isActiveLink,
  link,
  linkTitle,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded bg-white p-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">{title}</h1>
        {isActiveLink && link && (
          <Link
            href={link}
            className="flex items-center justify-center rounded-lg bg-neutral-200/70 px-3 py-1 text-sm duration-200 hover:bg-neutral-200/80 active:bg-neutral-400/20"
          >
            {linkTitle} <IoIosArrowRoundForward size={20} />
          </Link>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
