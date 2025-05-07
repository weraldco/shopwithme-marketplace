import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResponsiveLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
      {children}
    </div>
  );
};

export default ResponsiveLayout;
