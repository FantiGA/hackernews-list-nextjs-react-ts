/*
 * @Author: fantiga
 * @Date: 2023-01-15 21:21:06
 * @LastEditTime: 2023-01-22 21:20:41
 * @LastEditors: fantiga
 * @FilePath: /hackernews-list-react-ts/components/List.tsx
 */

import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import { SWRConfig } from "swr";
import styled from "styled-components";
import { useStories } from "@utils/common";
import { IList, TStory } from "@utils/interface";
import Error from "./Error";
import Loading from "./Loading";

const Link = styled.a`
  display: flex;
  padding: 0.5em;

  &:hover {
    background-color: #cccccc;
  }
`;

const List: FC<IList> = memo(({ fallback }) => {
  const { data: stories, error, isLoading } = useStories(0, 20);
  if (error) return <Error message="Failed to load" />;
  const bottomDomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        // If not visible
        if (entries[0]!.intersectionRatio <= 0) {
          bottomDomRef.current!.style.display = "none";
        };
        console.log('Loaded new items');
        bottomDomRef.current!.style.display = "";
      }
    );

    // start observing
    observer.observe(bottomDomRef.current!);

    return () => {
      // stop observing
      observer.unobserve(bottomDomRef.current!);

      // close observer
      observer.disconnect();
    };
  }, [stories, error, isLoading]);

  const homeInfo: TStory[] = [...stories!];
  // Rendered component data
  const [compList, setCompList] = useState<TStory[]>([]);

  const splitGroups = (homeList: TStory[], pageSize: number): TStory[] => {
    let groupsTemp: TStory[] = [];
    for (let i = 0; i < homeList.length; i += pageSize) {
      groupsTemp = [...groupsTemp, ...homeList.slice(i, i + pageSize)];
    }
    return groupsTemp;
  };

  const compGroups: TStory[] = useMemo(() => splitGroups(homeInfo, 3), [homeInfo]);
  const groupCount = compGroups.length;
  const [groupIdx, setGroupIdx] = useState(0);


  const scrollRenderHandler = (): void => {
    const rect = bottomDomRef.current?.getBoundingClientRect();
    const top = rect ? rect.top : 0;
    const clientHeight = document.documentElement.clientHeight
      || document.body.clientHeight;
    if (top < clientHeight && groupIdx < groupCount) {
      setCompList([...compList, compGroups[groupIdx]]);
      setGroupIdx(groupIdx + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollRenderHandler);
    return (): void => {
      document.removeEventListener('scroll', scrollRenderHandler);
    };
  }, [scrollRenderHandler]);

  return (
    <SWRConfig value={{ fallback }}>
      <ol>
        {
          stories?.map((story) => {
            return <li key={story.id}><Link href={story.url} target="_blank">{story.title}</Link></li>;
          })
        }
      </ol>

      <div ref={bottomDomRef}>
        <Loading />
      </div>
    </SWRConfig>
  );
});

export default List;
