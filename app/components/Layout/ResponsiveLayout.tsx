import { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const ResponsiveLayout: FC<Props> = ({ children }) => {
	return <div className="">{children}</div>;
};

export default ResponsiveLayout;
