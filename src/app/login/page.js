import {AiOutlineLoading} from 'react-icons/ai'
import {
  Button,
  Label,
  Radio,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Image from "next/image";
import loginImage from "../../../public/assets/loginImage.png";

export default function Page() {
  return (
    <section className="w-screen h-screen flex">
      <section className="w-6/12 max-h-screen">
        <Image
          src={loginImage}
          placeholder="blur"
          className="w-full h-screen object-cover"
        />
      </section>
      <section className="w-6/12 flex justify-center items-center">
        <div className="w-8/12">
          <p className="font-semibold text-2xl mb-5">Login to PropertyHub</p>
          <div className="flex flex-col gap-3">
          <div>
            <Label>Email</Label>
            <TextInput color="gray" />
          </div>
          <div>
            <Label>Password</Label>
            <TextInput color="gray" />
          </div>
          <Button className="w-full" isProcessing processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}>Login</Button>
          </div>
          <p className="mt-4">Don't have an account yet? <span className="underline cursor-pointer font-medium">Sign up</span></p>
        </div>
      </section>
    </section>
  );
}
