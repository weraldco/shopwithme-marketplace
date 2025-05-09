import LoginForm from "@/app/components/Auth/LoginForm";
import ResponsiveLayout from "@/app/components/Layout/ResponsiveLayout";
import { FC } from "react";

interface Props {}

const page: FC<Props> = () => {
  return (
    <div>
      <ResponsiveLayout>
        <LoginForm></LoginForm>
      </ResponsiveLayout>
    </div>
  );
};

export default page;
