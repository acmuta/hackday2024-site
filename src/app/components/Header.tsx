import Image from "next/image";

export default function Header() {
  return (
    <div className="flex sticky top-2 flex-row md:gap-x-56 gap-x-10 max-h-16 mt-1 max-w-full content-center items-center inset-y-0">
      <div className="flex flex-row gap-3 ">
        <Image src="/logo.svg" alt="hackDay" width={60} height={60} />
        <div className="flex flex-col iceland justify-center">
          <h1>HACKDAY</h1>
          <h1>2024</h1>
        </div>
      </div>
      <div className="flex flex-row md:gap-20 iceland">
        <div>
          <button className="flex align-middle text-2xl pl-12 pr-12 bg-white bg-opacity-20 rounded-md text-white justify-center border-solid border-2">
            Apply
          </button>
        </div>
        <div>
          <button className="flex align-middle text-2xl pl-12 pr-12 bg-white bg-opacity-20 rounded-md text-white justify-center border-solid border-2">
            FAQ
          </button>
        </div>
        <div>
          <button className="flex align-middle text-2xl pl-12 pr-12 bg-white bg-opacity-20 rounded-md text-white justify-center border-solid border-2">
            Schedule
          </button>
        </div>
      </div>
      <div className="iceland">
        <button className="flex align-middle text-2xl pl-8 pr-8 bg-white rounded-md text-black justify-center border-solid border-2">
          Sign in
        </button>
        <div className="absolute"></div>
      </div>
    </div>
  );
}