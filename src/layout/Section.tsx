import { ReactNode } from 'react';
import { sectionPaddingTop, titleMarginBottom } from './Common';

type ISectionProps = {
  title?: string;
  description?: string | JSX.Element;
  yPadding?: string | string[];
  children?: ReactNode;
};

function Section(props: ISectionProps){
  const yPadding = props.yPadding? (
    Array.isArray(props.yPadding) ? 
      props.yPadding.join(' ') : 
      props.yPadding
  ) : sectionPaddingTop;

  return(
    <div
      className={`max-w-screen-lg text-lg mx-auto px-3 sm:px-8 ${yPadding}`}
    >
      {(props.title || props.description) && (
        <div className={`${titleMarginBottom} text-center`}>
          {props.title && (
            <h2 className="text-4xl text-gray-500 font-bold">{props.title}</h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{props.description}</div>
          )}
        </div>
      )}
      {props.children}
    </div>
  );
}

export { Section };
