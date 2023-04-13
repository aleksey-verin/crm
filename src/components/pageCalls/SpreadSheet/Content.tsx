import React from 'react';
import Loader from '../../commonUI/Loader';
import ContentDate from './Content/ContentDate';
import ContentItem from './Content/ContentItem';
import { useSelector } from 'react-redux';
import { selectorCallsDataSlice } from '../../../store/reducers/callsDataSlice';

interface ContentProps {
  allChecked: boolean;
}

const Content = ({ allChecked }: ContentProps) => {
  const { data, isLoading } = useSelector(selectorCallsDataSlice);

  return (
    <div className="spreadsheet-content">
      {data
        ? data.map((item, index) => {
            const myItem = <ContentItem key={item.id} data={item} allChecked={allChecked} />;

            if (index < data.length - 1 && item.date_notime !== data[index + 1].date_notime) {
              const sumNext = data.filter(
                (i) => i.date_notime === data[index + 1].date_notime
              ).length;
              return (
                <React.Fragment key={item.id}>
                  <>{myItem}</>
                  <ContentDate
                    key={index}
                    date={data[index + 1].date_notime}
                    sumNext={sumNext}
                    // index={index}
                    // length={data.length}
                  />
                </React.Fragment>
              );
            }
            return myItem;
          })
        : null}
      {isLoading && <Loader />}
    </div>
  );
};

export default Content;
