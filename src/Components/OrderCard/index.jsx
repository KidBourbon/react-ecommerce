import { useContext } from 'react';

import { ChangeAmountIcons } from '../ChangeAmountIcons';
import { GlobalContext } from '../../Context';
import { onImageLoadError, formatPrice } from '../../Utils';

import { TrashIcon } from '@heroicons/react/24/solid';

const OrderCard = ({
  id,
  title,
  description,
  category,
  price,
  pictureUrl,
  amount,
  canAmountBeChanged,
  canBeRemoved,
}) => {
  const { addProductToCart, removeProductFromCartOnce, removeProductFromCartEntirely } =
    useContext(GlobalContext);

  const onClickChevronUpIcon = () =>
    addProductToCart({ id, title, description, category, price, pictureUrl });

  const onClickChevronDownIcon = () => removeProductFromCartOnce(id);

  const onClickTrashIcon = () => removeProductFromCartEntirely(id);

  const changeAmountIcons = canAmountBeChanged ? (
    <ChangeAmountIcons
      onClickChevronUpIcon={onClickChevronUpIcon}
      onClickChevronDownIcon={onClickChevronDownIcon}
    />
  ) : (
    <></>
  );

  const trashIcon = canBeRemoved ? (
    <TrashIcon
      className='absolute -top-[0.875rem] -right-1 w-6 min-w-6 h-6 min-h-6 p-[0.15rem] text-red-800 hover:text-white border-2 border-solid border-red-800 hover:border-white rounded-full bg-white hover:bg-red-800 cursor-pointer transition-all duration-200 prevent-select'
      onClick={onClickTrashIcon}
    />
  ) : (
    <></>
  );

  return (
    <div className='relative w-full h-24 flex justify-between items-center gap-2 py-1 pl-1 pr-1 sm:pr-2 border border-solid border-white rounded-lg'>
      <div className='h-full flex items-center gap-2'>
        <figure className='relative h-full shrink-0'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={pictureUrl}
            alt={description}
            onError={onImageLoadError}
          />

          <div className='flex justify-center items-center absolute -top-3 left-[4.5rem] px-[0.375rem] text-sm text-white border-2 border-solid border-white rounded-full bg-card-color'>
            <span>{amount}</span>
          </div>
        </figure>

        <p className='multiline-ellipsis text-sm text-white'>{title}</p>
      </div>

      <div className='h-full flex items-center gap-2'>
        <p className='text-lg font-medium text-white'>{formatPrice(price)}</p>

        {changeAmountIcons}
      </div>

      {trashIcon}
    </div>
  );
};

export { OrderCard };
