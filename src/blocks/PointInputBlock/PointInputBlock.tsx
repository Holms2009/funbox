import block from "bem-cn";
import { FormEventHandler, useEffect } from "react";

import './PointInputBlock.scss';

const b = block('PointInputBlock');

type Props = {
  submitHandler: FormEventHandler;
}

function PointInputBlock({ submitHandler }: Props) {
  
  useEffect(() => {
    const input: HTMLInputElement | null = document.querySelector('.PointInputBlock__input');

    if (input) input.value = '';
  })

  return (
		<form className={b()} onSubmit={submitHandler}>
			<input className={b('input')} type="text" name="text"></input>
			<input
				className={b('button')}
				type="submit"
				value="Добавить"
			></input>
		</form>
	)
}

export default PointInputBlock;