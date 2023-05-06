import ScoreDots from '../components/pageCalls/SpreadSheet/Content/Score/ScoreDots';
import ScoreText from '../components/pageCalls/SpreadSheet/Content/Score/ScoreText';

export const filtersValues = {
  inOutCalls: [
    { name: 'Все типы', request: '' },
    { name: 'Входящие', request: '1' },
    { name: 'Исходящие', request: '0' }
  ],
  personCalls: [{ name: 'Все сотрудники', request: '' }],
  typesCalls: [
    { name: 'Все звонки', request: '' },
    { name: 'Все клиенты', request: 'clients' },
    { name: 'Новые клиенты', request: 'new_clients' },
    { name: 'Все исполнители', request: 'workers' },
    { name: 'Через приложение', request: 'app' },
    { name: 'Прочие звонки', request: '' }
  ],
  sources: [
    { name: 'Все источники', request: '' },
    { name: 'Яндекс', request: 'yandex' },
    { name: 'Гугл', request: 'google' },
    { name: 'С сайта', request: 'from_site' },
    { name: 'Без источника', request: 'empty' }
  ],
  errors: [
    { name: 'Все ошибки', request: '' },
    { name: 'Приветствие', request: '' },
    { name: 'Имя', request: '' },
    { name: 'Цена', request: '' },
    { name: 'Скидка', request: '' },
    { name: 'Предзаказ', request: '' },
    { name: 'Благодарность', request: '' },
    { name: 'Стоп слова', request: '' }
  ],
  results: [
    { name: 'Все оценки', request: '' },
    { name: 'Распознать', request: 'noerrors' },
    { name: 'Скрипт не использован', request: 'noscript' },
    { name: 'bad', request: '', element: <ScoreText score="bad" /> },
    { name: 'good', request: '', element: <ScoreText score="good" /> },
    { name: 'perfect', request: '', element: <ScoreText score="perfect" /> },
    { name: '*', request: '', element: <ScoreDots score="bad" /> },
    { name: '**', request: '', element: <ScoreDots score="good" /> },
    { name: '***', request: '', element: <ScoreDots score="perfect" /> }
  ]
};

export interface menuItemTypes {
  name: string;
  request: string;
  element?: JSX.Element;
}
