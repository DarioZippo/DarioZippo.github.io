import className from 'classnames';
import { useRouter } from 'next/router';

interface IProjectFeatureProps {
  title: string;
  link?: string;
  description: string | JSX.Element;
  image?: string;
  reverse?: boolean;
}
export function ProjectFeature (props: IProjectFeatureProps) {
  const projectFeatureClass = className(
    'mt-4 sm:mt-6',
    'flex',
    'flex-wrap',
    'items-center',
    'major-projects',
    {
      'flex-row-reverse': props.reverse ?? false,
    },
  );

  const router = useRouter();

  return (
    <div className={projectFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-500 font-semibold">
          {props.link != null ? (
            <a href={props.link}>{props.title}</a>
          ) : (
            props.title
          )}
        </h3>
        <div className="mt-2 sm:mt-6 text-xl leading-9">
          {props.description}
        </div>
      </div>

      {props.image != null ? (
        <div className="w-full sm:w-1/2 px-6 py-2 sm:p-6 flex justify-center">
          <img
            className="max-h-48 md:max-h-64 lg:max-h-80"
            src={`${router.basePath}${props.image}`}
            alt='Missing'
          />
        </div>
      ) : null}
    </div>
  );
}

export function MinorProjectsShowcase(props: { children: JSX.Element[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 minor-projects">{props.children}</div>
  );
}

interface IMinorProjectFeatureProps {
  title: string;
  link?: string;
  description: string | JSX.Element;
}

export function MinorProjectFeature(props: IMinorProjectFeatureProps) {
  return (
    <div className="m-5 text-center sm:px-6">
      <h3 className="text-lg text-gray-500 font-semibold">
        {props.link != null ? (
          <a href={props.link}>{props.title}</a>
        ) : (
          props.title
        )}
      </h3>
      <div className="mt-1 leading-6">{props.description}</div>
    </div>
  );
}
