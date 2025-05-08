import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ResponsiveContainer: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {children}
    </div>
  );
};

export default ResponsiveContainer;
