import { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const IconsRow = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center inline-block">
    <ul className="navbar flex items-center font-medium text-xl text-gray-500">
      {props.children}
    </ul>
  </div>
);

export { IconsRow };
