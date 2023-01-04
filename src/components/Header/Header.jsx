/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
import { memo } from 'react';
import Form from './Form/Form'

const Header = () => (
  <header>
    <h1 className="mt-3 d-flex justify-content-center">My ToDo List</h1>
    <Form />
  </header>
)

const HeaderMemo = memo(Header);

export default HeaderMemo;
