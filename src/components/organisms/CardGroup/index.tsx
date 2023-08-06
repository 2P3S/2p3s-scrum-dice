import { MockCard } from '@/components/atoms/Card';
import classnames from 'classnames';

export type DeckCardGroupProps = DeckCardGroup & {
  isSelected: boolean;
  setDeckType: (deckType: DeckType) => void;
};

export const DeckCardGroup = (props: DeckCardGroupProps) => {
  const selectedWrapperStyle = props.isSelected ? 'bg-blue-800 bg-opacity-20 shadow-md' : '';

  return (
    <div
      className={classnames(
        'p-3 rounded-md grid grid-cols-5 gap-2 place-items-center hover:border hover:border-blue-700',
        selectedWrapperStyle,
      )}
      onClick={() => props.setDeckType(props.deckType)}
    >
      {props.contents.map(content => (
        <MockCard className="!text-4xl" cardType="cost-type" content={content} key={content} />
      ))}
    </div>
  );
};

export type OptionCardGroupProps = CardGroup & {
  optionCards: NotCostContent[];
  setOptionCards: (notCostContents: NotCostContent[]) => void;
};

export const OptionCardGroup = ({ optionCards, setOptionCards, contents }: OptionCardGroupProps) => {
  /**
   * 선택된 옵션 카드를 추가하거나 삭제하는 함수입니다.
   * @param notCostContent - 추가 또는 삭제할 옵션 카드
   */
  const selectedOptionCards = (notCostContent: NotCostContent) => {
    const index = optionCards.findIndex(card => card === notCostContent);
    if (index === -1) {
      setOptionCards([...optionCards, notCostContent]);
    } else {
      const updatedOptionCards = optionCards.filter((_, i) => i !== index);
      setOptionCards(updatedOptionCards);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-6">
      {contents.map(content => (
        <MockCard
          cardType="not-cost-type"
          content={content}
          key={content}
          onClick={() => selectedOptionCards(content as NotCostContent)}
        />
      ))}
    </div>
  );
};
