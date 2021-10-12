import { useRouter } from "next/router";

type ILogoProps = {
  xl?: boolean;
  className?: string;
};

const Logo = (props: ILogoProps) => {
  //const size = props.xl ? "44" : "32";
  const router = useRouter();

  return (
    <div className={props.className}>
      <img src={`${router.basePath}/assets/images/summerstage-logo.png`} />
    </div>
  );
};

export { Logo };
