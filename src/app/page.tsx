import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Image
      src={"/jenkins.png"}
      alt="jenkins-logo"
      height={400}
      width={400}
     />
     <h1 className="text-7xl from">Welcome to Jenkins CI/CD</h1>
     <p>Deploy - 5</p>
    </div>
  );
}
