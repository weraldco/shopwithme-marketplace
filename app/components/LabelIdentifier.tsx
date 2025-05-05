import { FC } from "react";

interface Props {
  title: string;
  content: number | undefined;
  className?: string;
  titleClass?: string;
}

const LabelIdentifier: FC<Props> = ({
  title,
  content,
  className,
  titleClass,
}) => {
  return (
    <div className={`grid grid-flow-col grid-cols-2 ${className}`}>
      <span className={`italic ${titleClass}`}>{title}</span>
      <span className="text-right">
        {content ? `$ ${Math.abs(content).toFixed(2)}` : 0}
      </span>
    </div>
  );
};

export default LabelIdentifier;
