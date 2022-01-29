import block from "bem-cn";
import { FormEventHandler, useEffect } from "react";

import './PointInputBlock.scss';

const b = block('PointInputBlock');

type Props = {
  submitHandler: FormEventHandler;
  theme: string;
}

function PointInputBlock({ submitHandler, theme }: Props) {
  useEffect(() => {
    const input: HTMLInputElement | null = document.querySelector('.PointInputBlock__input');
    if (input) input.value = '';
  })

  return (
		<form className={b()} onSubmit={submitHandler}>
			<input className={b('input', {dark: theme === 'light', light: theme === 'dark'})} type="text" name="text"></input>
			<input
				className={b('button', {dark: theme === 'light', light: theme === 'dark'})}
				type="submit"
				value="Добавить"
			></input>
		</form>
	)
}

export default PointInputBlock;