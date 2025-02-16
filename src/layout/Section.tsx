import { ReactNode } from "react";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  light?: boolean;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-lg mx-auto px-3 ${
      props.yPadding ? props.yPadding : "py-16"
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {!props.light && props.title && (
          <h2 className="font-fjalla text-4xl text-gray-900 font-bold">
            {props.title}
          </h2>
        )}
        {props.light && props.title && (
          <h2 className="font-fjalla text-4xl text-white font-bold">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
