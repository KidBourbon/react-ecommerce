import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const ChangeAmountIcons = ({ onClickChevronUpIcon, onClickChevronDownIcon }) => {
  return (
    <div className='flex flex-col gap-2'>
      <ChevronUpIcon
        className='w-6 min-w-6 h-6 min-h-6 p-[0.125rem] text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200 prevent-select'
        onClick={onClickChevronUpIcon}
      />

      <ChevronDownIcon
        className='w-6 min-w-6 h-6 min-h-6 p-[0.125rem] text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200 prevent-select'
        onClick={onClickChevronDownIcon}
      />
    </div>
  );
};

export { ChangeAmountIcons };
