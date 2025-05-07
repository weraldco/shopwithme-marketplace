import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const ContentWrapper: FC<Props> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  );
};

export default ContentWrapper;
