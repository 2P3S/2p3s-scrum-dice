import { Card } from '@/components/atoms/Card';
import classnames from 'classnames';

export type CardGroupProps = CardGroup & {
  onCardClick: (title: string) => void;
};

export const CardGroup = (props: CardGroupProps) => {
  const selectedWrapperStyle = 'bg-blue-800 bg-opacity-20 shadow-md';

  return (
    <div
      className={classnames(
        'p-3 rounded-md grid grid-cols-5 gap-2 place-items-center hover:border hover:border-blue-700',
        props.selected && selectedWrapperStyle,
      )}
      onClick={() => props.onCardClick(props.title)}
    >
      {props.cards.map((item, i) => (
        <Card key={i} state={props.selected ? 'selectable' : 'openedMe'} className="!text-4xl">
          {item}
        </Card>
      ))}
    </div>
  );
};
