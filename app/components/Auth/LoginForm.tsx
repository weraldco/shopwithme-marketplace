import { FC } from "react";

interface Props {}

const LoginForm: FC<Props> = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-xl">Welcome back</h1>
    </div>
  );
};

export default LoginForm;
