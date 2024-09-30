import Link from 'next/link';
import { useRouter } from 'next/router';

interface ITabsProps {
  tabs: ITabProps[]
}

export function Tabs(props: ITabsProps) {
  const router = useRouter();

  const activeTab = props.tabs.find((t) => t.route == router.route)
    ?? props.tabs.find((t) => t.default == true);

  function renderContent(content?: JSX.Element | JSX.Element[])
  {
    if(Array.isArray(content))
      return content.map((e, i) => <div key={i}>{e}</div>)
    else
      return content;
  }

  return (
    <div>
      <div className='max-w-screen-lg mx-auto text-center flex flex-wrap justify-center items-center'>
      {
        props.tabs.map((t, i) => {
          if (t.route == activeTab?.route) 
          {
            return (
              <h2
                key={i}
                className="text-4xl text-gray-500 font-bold m-2 inline"
              >
                {t.title}
              </h2>
            );
          }
          else if (!t.hidden)
          {
            return (
                <Link
                  key={i}
                  href={t.route.replace('/', '')}
                  shallow={true}
                  scroll={false}
                >
                    <h3
                      className="text-3xl text-gray-900 font-bold m-2 inline underline"
                    >
                      {t.title}
                    </h3>
                </Link>
            );
          }
          else {
            return (<span key={i}></span>)
          }
        })
      }
      </div>
      <div>
        {renderContent(activeTab?.content)}
      </div>
    </div>
  );
}

export interface ITabProps {
  title: string,
  route: string,
  default?: boolean,
  hidden?: boolean,
  content: JSX.Element | JSX.Element[]
}
